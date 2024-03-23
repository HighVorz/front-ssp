<template>
	<div id="main81">
		<baidu-map  class="map" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true" >
      <bm-control>
        <div  style="display: inline-block">
          <span style="">起点：</span>    
          <el-input id="startId" style="width: 200px;" v-model="startName" placeholder="请输入地名关键字"></el-input>      
          <span style="margin-left: 20px;">终点：</span> 
          <el-input id="endId" style="width: 200px;" v-model="endName" placeholder="请输入地名关键字"></el-input>  
          <el-button :loading="!loading" style="margin-left: 20px;" @click="openDistanceTool">开启搜索</el-button> 
        </div> 
      </bm-control>
    </baidu-map>
	</div>
</template>
<script setup>
import { BaiduMap } from "vue-baidu-map";
import { ref,reactive,watchEffect } from 'vue'
import $ from "jquery";
import store from '../../vuex/store.js'
const center = reactive({ lng: 0, lat: 0 });
const zoom = ref(0); //初始放大倍数
const startName = ref()
const endName = ref()
const startPoint = ref({ lng: 0, lat: 0 })
const endPoint = ref({ lng: 0, lat: 0 })
const loading = ref(true)
let Map; 
function handler({ BMap, map }) {
  Map = map
  Map.setMapStyle({styleJson: [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": {
                "hue": "#021135",
                // "lightness": 5, //亮度
                "saturation": 150 //饱和度
            }
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#021135"
            }
          }
        ]}); 
      getBoundary(Map, "上海市") 
      AddressSearchStart();
      AddressSearchEnd();
    
}
// 限制显示区域
function getBoundary(map,city){
    var bdary = new BMap.Boundary();
    bdary.get(city, function(rs){//获取行政区域
      map.clearOverlays();//清除地图覆盖物
        //思路：利用行政区划点的集合与外围自定义东南西北形成一个环形遮罩层
        //1.获取选中行政区划边框点的集合rs.boundaries[0]
    	var list =rs.boundaries;
    	var max  = list[0];
    	for (var i = 1; i < list.length; i++) {
    		if (list[i].length > max.length){ 
    			max = list[i]; 
    		}
		}
        	var strs = new Array();
        	strs = max.split(";");
        	var ENWS = "";
        	for (var i=0;i<strs.length;i++) {
        		ENWS += strs[i] + ";"
        	}
        	//2.自定义外围边框点的集合
        	var E_JW = "170.672126, 39.623555;";        //东
        	var EN_JW = "170.672126, 81.291804;";       //东北角
        	var N_JW = "105.913641, 81.291804;";        //北
        	var NW_JW = "-169.604276,  81.291804;";     //西北角
        	var W_JW = "-169.604276, 38.244136;";       //西
        	var WS_JW = "-169.604276, -68.045308;";     //西南角
        	var S_JW = "114.15563, -68.045308;";        //南
        	var SE_JW = "170.672126, -68.045308 ;";     //东南角
        	//3.添加环形遮罩层
        	var ply1 = new BMap.Polygon(ENWS + E_JW + SE_JW + S_JW + WS_JW + W_JW + NW_JW + N_JW + EN_JW + E_JW, {
        		strokeColor:"none",
        		strokeOpacity:0,
        		fillColor:"#0f1f40",
        		fillOpacity:"1"
        			}); //建立多边形覆盖物
        	map.addOverlay(ply1);//遮罩物是半透明的，如果需要纯色可以多添加几层
        	//4. 给目标行政区划添加边框，其实就是给目标行政区划添加一个没有填充物的遮罩层
        	var ply = new BMap.Polygon(max, {strokeWeight:3,strokeColor:"#064fa0",fillColor:""});
        	map.addOverlay(ply);
        	map.setViewport(ply.getPath());//调整视野    
          //5. 给定初始位置及缩放倍数
          center.lng = 121.487899486
	        center.lat = 31.24916171
	        zoom.value = 15
    }); 
}
// 地图路线画线
function map_search(){
  var start = new BMap.Point(startPoint.value.lng,startPoint.value.lat);
  var end = new BMap.Point(endPoint.value.lng,endPoint.value.lat);
    Map.clearOverlays(); //清除地图上所有覆盖物
   // getBoundary(Map, "上海市") 
    var transit = new BMap.DrivingRoute(Map, {
        renderOptions: {
            map: Map,
            panel: "r-result",
            enableDragging : true, //起终点可进行拖拽
            autoViewport: true //线路绘制后自动调整地图视野层级
        },
        onSearchComplete: function(results){
            var plan = results.getPlan(0);
            // 获取方案的驾车线路
            if(plan){
                var ss = [];
                // 获取线路上所有关键坐标点
                for(var i=0;i<plan.getNumRoutes();i++){
                    var route = plan.getRoute(i);
                    ss = ss.concat(route.getPath());
                }
                var dis = plan.getDistance(false);//获取总公里数
                var t = plan.getDuration(false);///获取总耗时
                $("#sugMileage").val((dis/1000).toFixed(2));//需要传给后台，保存到表单元素
                $("#sugTime").val((t/3600).toFixed(2));
                $("#sugLngAndLat").val(JSON.stringify(ss));//线路上所有点集合转成json存储
            }
        },
        onPolylinesSet:function(routes){
            //设置线条样式，线路分为几段
             for(var i=0;i<routes.length;i++){
                 routes[i].getPolyline().setStrokeWeight(8);
                 routes[i].getPolyline().setStrokeOpacity(1);
                 routes[i].getPolyline().setStrokeColor("red");
             }
            
        },
    });
    transit.search(start, end);//发起检索
}
// 起点终点搜索
function AddressSearchStart() {
	//Autocomplete是结果提示、自动完成类。
	var Aco = new BMap.Autocomplete({
      // 输入框的id
      input: "startId",
      location: Map,
    })
    Aco.addEventListener("onhighlight", function (e) {
      //鼠标放在下拉列表上的事件
    })
    Aco.addEventListener("onconfirm", function (e) {
      //鼠标点击下拉列表后的事件
      var _value = e.item.value;
      // 拼装的地址信息
      var myValue =
        _value.province +
        _value.city +
        _value.district +
        _value.street +
        _value.business;
      setPlace(myValue);
    })
}
function AddressSearchEnd() {
	//Autocomplete是结果提示、自动完成类。
	var Aco = new BMap.Autocomplete({
      // 输入框的id
      input: "endId",
      location: Map,
    })
    Aco.addEventListener("onhighlight", function (e) {
      //鼠标放在下拉列表上的事件
    })
    Aco.addEventListener("onconfirm", function (e) {
      //鼠标点击下拉列表后的事件
      var _value = e.item.value;
      // 拼装的地址信息
      var myValue =
        _value.province +
        _value.city +
        _value.district +
        _value.street +
        _value.business;
      setPlace(myValue);
    })
}
function setPlace(value) {
	//this.map.clearOverlays(); //清除地图上所有覆盖物
	// 创建一个检索对象
	var local = new BMap.LocalSearch(Map, {
		//智能搜索
		onSearchComplete: function () {
			var getpo = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
			Map.centerAndZoom(getpo, 18);
			Map.addOverlay(new BMap.Marker(getpo)); //添加标注
		},
	});
	local.search(e);
}
// 地名转换为经纬度
// 起点地点坐标获取
function searchByStationName1() {
    var startAddrr = document.getElementById("startId").value; //获得起始地地名
    //通过地址检索的方式设立标注点，同时获取到起点和终点的经纬度坐标
    var localSearch = new BMap.LocalSearch(Map);
    //设置检索结束后的回调函数。
    localSearch.setSearchCompleteCallback(function (searchResult) {
        var poi = searchResult.getPoi(0); //获得起点经纬度坐标
        if (poi != null) {
          //判断地名是否存在
          startPoint.value = poi.point;//获得起点经纬度坐标
          //开始检索终点坐标
          searchByStationName2();
        } else {
          alert("请输入正确的地名！");
        }
      });
      localSearch.search(startAddrr);
}
    // 终点地点坐标获取
function searchByStationName2() {
  var endAddrr = document.getElementById("endId").value; //获得目的地地名
  //通过地址检索的方式设立标注点，同时获取到起点和终点的经纬度坐标
  var localSearch = new BMap.LocalSearch(Map,{
  //检索结束后是否自动调整地图视野
    autoViewport:false,
  });
  //设置检索结束后的回调函数。
  localSearch.setSearchCompleteCallback(function (searchResult) {
    var poi = searchResult.getPoi(0); //获得目的地经纬度坐标
      if (poi != null) {
        //判断目的地是否存在
        endPoint.value = poi.point;
      } else {
        alert("请输入正确的地名！");
      }
    });
    localSearch.search(endAddrr);
    map_search()
    loading.value = true
    
}

function openDistanceTool(){
  loading.value=false
  searchByStationName1()
}
const step = ref()
// 使用 watchEffect 监听异步操作的结果
watchEffect(() => {
        step.value = store.state.count
         // 参数变化时执行搜索等操作
        console.log("接受传参", store.state.count)
        // 这里可以调用搜索函数等
        // search(newValue);
        // 使用百度地图的地理编码服务获取区域的经纬度范围
        var myGeo = new BMap.Geocoder();
            myGeo.getPoint(step.value, function(point) {
                if (point) {
                    // 根据返回的经纬度点设置地图的中心点和缩放级别
                    Map.centerAndZoom(point, 15);
                } else {
                    alert("您输入的区名无法解析！");
                }

    })
    })
</script>


<style>
.map{
	width: 100%;
	height: 500px;
}
</style>
