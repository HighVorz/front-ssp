<!-- 视频监控那个页面，也挺抽象的 -->
<template>
  <div class="main-box">
    <div class="left-box">
      <!-- 直播源 -->
      <div class="left-top" @click="clickvideo" ref="videobox">
        <video :src="videosrc" autoplay loop muted></video>
      </div>
      <!-- 展示实时抓拍的图片 -->
      <div class="left-bottom" style="display: flex">
        <!-- 以下没有具体内容 -->
        <el-carousel :interval="4000" type="card" v-show="!isShow" height="85%" style="
            height: 100%;
            width: 100%;
            margin-top: 1%;
            margin-left: 1%;
            margin-right: 1%;
          ">
          <el-carousel-item v-for="item in tableData" :key="item.id">
            <img :src="item.file_url" alt="" width="100%" height="100%"
              style="object-fit: cover; width: 100%; height: 100%" />
          </el-carousel-item>
        </el-carousel>

        <el-carousel :interval="4000" type="card" v-show="isShow" height="85%" style="
            height: 100%;
            width: 100%;
            margin-top: 1%;
            margin-left: 1%;
            margin-right: 1%;
          ">
          <el-carousel-item v-for="item in tableData2" :key="item.id">
            <img :src="item.file_url" alt="" width="100%" height="100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="right-box">
      <!-- 选择直播源 -->
      <div class="right-part1">
        <div class="row1">
          <el-button type="primary" @click="changevideo(1)" ref="button1"><span>车牌直播源 01</span></el-button>
          <el-button type="primary" @click="changevideo(2)"><span>车牌直播源 02</span></el-button>
          <el-button type="primary" @click="changevideo(7)"><span>车载直播源 07</span></el-button>
          <el-button type="primary" @click="changevideo(8)"><span>车载直播源 08</span></el-button>
        </div>
        <div class="row2">
          <el-button type="primary" @click="changevideo(3)"><span>车牌直播源 03</span></el-button>
          <el-button type="primary" @click="changevideo(4)"><span>车牌直播源 04</span></el-button>
          <el-button type="primary" @click="changevideo(9)"><span>车载直播源 09</span></el-button>
          <el-button type="primary" @click="changevideo(10)"><span>车载直播源 10</span></el-button>
        </div>
        <div class="row3">
          <el-button type="primary" @click="changevideo(5)"><span>车牌直播源 05</span></el-button>
          <el-button type="primary" @click="changevideo(6)"><span>车牌直播源 06</span></el-button>
          <el-button type="primary" @click="changevideo(11)"><span>车载直播源 11</span></el-button>
          <el-button type="primary" @click="changevideo(12)"><span>车载直播源 12</span></el-button>
        </div>
      </div>
      <!-- el-table展示数据 -->
      <div class="right-part2">
        <div class="title">
          <img src="../assets/images/baojing.png" />
          <h2>
            实时报警
          </h2>
        </div>
        <div class="my-table" v-show="!isShow">
          <el-table :data="tableData" style="width: 96%; margin-left: 2%">
            <el-table-column prop="camera_id" label="设备号" width="100" align="center">
            </el-table-column>
            <el-table-column prop="plate_number" label="车牌" width="width" align="center">
            </el-table-column>
            <el-table-column prop="timestamp" label="拍摄时间" width="width" align="center">
            </el-table-column>
          </el-table>
          <el-pagination class="msg-pagination-container" background :current-page="PRquery.page"
            :page-size="PRquery.size" layout="pager,total" :total="PRquery.count"
            @current-change="PRhandleCurrentChange" style="text-align: center; margin-top: 10px; color: aliceblue">
          </el-pagination>
        </div>
        <div class="my-table" v-show="isShow">
          <el-table :data="tableData2" style="width: 96%; margin-left: 2%" :row-style="{ height: '0' }">
            <el-table-column prop="camera_id" label="设备号" width="100" align="center">
            </el-table-column>

            <el-table-column prop="head_number" label="车载人数" width="width" align="center">
            </el-table-column>
            <el-table-column prop="timestamp" label="拍摄时间" width="width" align="center">
            </el-table-column>
          </el-table>
          <el-pagination class="msg-pagination-container" background :current-page="query.page" :page-size="query.size"
            layout="pager,total" :total="query.count" @current-change="HChandleCurrentChange"
            style="text-align: center; margin-top: 10px; color: aliceblue">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../utils/request";
export default {
  name: "TrafficMonitorView",
  data() {
    return {
      query: {
        page: 1,
        size: 10,
        count: 0,
      },
      PRquery: {
        page: 1,
        size: 10,
        count: 0,
      },
      isShow: false,
      //------------------------------- 未做：通过后端接口请求实时报警数据
      tableData: [],
      tableData2: [],
      //------------------------------- 未做：通过后端接口请求图片地址数据
      // images: [
      //   require("../assets/images/snapshot_1.jpeg"),
      //   require("../assets/images/snapshot_2.jpeg"),
      //   require("../assets/images/snapshot_1.jpeg"),
      //   require("../assets/images/snapshot_2.jpeg"),
      // ],
      videosrc: "",
      fullscreen: false,
    };
  },
  methods: {
    //选择全屏or退出全屏
    clickvideo() {
      if (this.fullscreen) {
        document.exitFullscreen();
      } else {
        this.$refs.videobox.webkitRequestFullscreen();
      }
      this.fullscreen = !this.fullscreen;
    },
    getHCList() {
      var _viewer = this;
      request
        .get(`/api/socket_recv_HC/?page=${_viewer.query.page}`)
        .then((response) => {
          console.log(response.results);
          _viewer.query.count = response.count;
          _viewer.tableData2 = response.results;
          // console.log(_viewer.terminalTypes);
        });
    },
    getPRList() {
      var _viewer = this;
      request
        .get(`/api/socket_recv_PR/?page=${_viewer.PRquery.page}`)
        .then((response) => {
          console.log(response.results);
          _viewer.PRquery.count = response.count;
          _viewer.tableData = response.results;
          // console.log(_viewer.terminalTypes);
        });
    },
    //分页器
    HChandleCurrentChange(val) {
      this.query.page = val;
      // this.$set(this.query, 'pageIndex', val);
      this.getHCList();
    },
    PRhandleCurrentChange() {
      this.PRquery.page = val;
      // this.$set(this.query, 'pageIndex', val);
      this.getPRList();
    },
    // 选择直播源端口
    changevideo(id) {
      if (id == 1) {
        this.isShow = false;
        this.videosrc = require("../assets/video/01.mp4");
      } else if (id == 2) {
        this.isShow = false;
        this.videosrc = "http://vjs.zencdn.net/v/oceans.mp4";
      } else if (id == 3) {
        this.isShow = false;
        this.videosrc = require("../assets/video/01.mp4");
      } else if (id == 4) {
        this.isShow = false;
        this.videosrc = "http://vjs.zencdn.net/v/oceans.mp4";
      } else if (id == 5) {
        this.isShow = false;
        this.videosrc = require("../assets/video/01.mp4");
      } else if (id == 6) {
        this.isShow = false;
        this.videosrc = "http://vjs.zencdn.net/v/oceans.mp4";
      } else if (id == 7) {
        this.isShow = true;
        this.videosrc = require("../assets/video/01.mp4");
      } else if (id == 8) {
        this.isShow = true;
        this.videosrc = "http://vjs.zencdn.net/v/oceans.mp4";
      } else if (id == 9) {
        this.isShow = true;
        this.videosrc = require("../assets/video/01.mp4");
      } else if (id == 10) {
        this.isShow = true;
        this.videosrc = "http://vjs.zencdn.net/v/oceans.mp4";
      } else if (id == 11) {
        this.isShow = true;
        this.videosrc = require("../assets/video/01.mp4");
      } else {
        this.isShow = true;
        this.videosrc = "http://vjs.zencdn.net/v/oceans.mp4";
      }
    },
  },
  // 挂载
  mounted() {
    this.videosrc = require("../assets/video/01.mp4");
    this.$refs.button1.$el.focus();
    this.getHCList();
    this.getPRList();
  },
};
</script>

<style scoped>
.el-button {
  width: 20%;
  height: 50%;
  line-height: 30%;
  text-align: center;
}

.el-button--primary {
  color: #ccc;
  text-align: center;
  background-color: #1d2840;
  border: none;
}

.el-button--primary:hover {
  color: #ccc;
  background-color: #323140;
  border: none;
}

.el-button--primary:focus {
  color: #ccc;
  background-color: #394665;
  border: none;
}

.right-part1 {
  padding-top: 0.01%;
}

.row1,
.row2,
.row3 {
  margin-top: 2%;
  text-align: center;
  width: 100%;
  height: 28%;
}

.row1>.el-button--primary,
.row2>.el-button--primary,
.row3>.el-button--primary {
  font-size: calc(100vw * 18 / 1980);
  height: 100%;
  font-weight: bold;
  text-align: center;
  padding: 5px 5px 5px 5px;
}

.row1> .el-button--primary> span >span,
.row2> .el-button--primary> span >span,
.row3> .el-button--primary> span >span {
  font-family: "HeaderFont", sans-serif;
}

@font-face {
  font-family: 'HeaderFont';
  src: url('../assets/fonts/AlimamaFangYuanTiVF-Thin.ttf') format('opentype');
}

.main-box {
  width: 100%;
  height: 100%;
  display: flex;
}

.left-box {
  width: 60%;
  height: 100%;
}

.right-box {
  width: 39%;
  height: 100%;
  margin-left: 1%;
}

.left-top {
  width: 100%;
  height: 72%;
  /* background-color: rebeccapurple; */
  animation: breathe 2s infinite;
  /* box-shadow: 0 0 1.5vw #1f69b9b9 inset; */
  background: linear-gradient(#33cdfa, #33cdfa) left top,
    linear-gradient(#33cdfa, #33cdfa) left top,
    linear-gradient(#33cdfa, #33cdfa) right top,
    linear-gradient(#33cdfa, #33cdfa) right top,
    linear-gradient(#33cdfa, #33cdfa) left bottom,
    linear-gradient(#33cdfa, #33cdfa) left bottom,
    linear-gradient(#33cdfa, #33cdfa) right bottom,
    linear-gradient(#33cdfa, #33cdfa) right bottom;
  background-repeat: no-repeat;
  background-size: 0.1vw 1.5vw, 1.5vw 0.1vw;
}

.left-bottom {
  margin-top: 1%;
  width: 100%;
  height: 27%;
  animation: breathe 2s infinite;
  /* box-shadow: 0 0 1.5vw #1f69b9b9 inset; */
  background: linear-gradient(#33cdfa, #33cdfa) left top,
    linear-gradient(#33cdfa, #33cdfa) left top,
    linear-gradient(#33cdfa, #33cdfa) right top,
    linear-gradient(#33cdfa, #33cdfa) right top,
    linear-gradient(#33cdfa, #33cdfa) left bottom,
    linear-gradient(#33cdfa, #33cdfa) left bottom,
    linear-gradient(#33cdfa, #33cdfa) right bottom,
    linear-gradient(#33cdfa, #33cdfa) right bottom;
  background-repeat: no-repeat;
  background-size: 0.1vw 1.5vw, 1.5vw 0.1vw;
}

/* 呼吸效果阴影框 */
@keyframes breathe {

  0%,
  100% {
    box-shadow: 0 0 1vw #1f69b9b9 inset;
  }

  50% {
    box-shadow: 0 0 3vw #1f69b9b9 inset;
  }
}

.right-part1 {
  width: 100%;
  height: 45%;
  animation: breathe 2s infinite;
  /* box-shadow: 0 0 1.5vw #1f69b9b9 inset; */
  background: linear-gradient(#33cdfa, #33cdfa) left top,
    linear-gradient(#33cdfa, #33cdfa) left top,
    linear-gradient(#33cdfa, #33cdfa) right top,
    linear-gradient(#33cdfa, #33cdfa) right top,
    linear-gradient(#33cdfa, #33cdfa) left bottom,
    linear-gradient(#33cdfa, #33cdfa) left bottom,
    linear-gradient(#33cdfa, #33cdfa) right bottom,
    linear-gradient(#33cdfa, #33cdfa) right bottom;
  background-repeat: no-repeat;
  background-size: 0.1vw 1.5vw, 1.5vw 0.1vw;
}

.right-part2 {
  width: 100%;
  height: 55%;
  margin-top: 1%;
  animation: breathe 2s infinite;
  /* box-shadow: 0 0 1.5vw #1f69b9b9 inset; */
  background: linear-gradient(#33cdfa, #33cdfa) left top,
    linear-gradient(#33cdfa, #33cdfa) left top,
    linear-gradient(#33cdfa, #33cdfa) right top,
    linear-gradient(#33cdfa, #33cdfa) right top,
    linear-gradient(#33cdfa, #33cdfa) left bottom,
    linear-gradient(#33cdfa, #33cdfa) left bottom,
    linear-gradient(#33cdfa, #33cdfa) right bottom,
    linear-gradient(#33cdfa, #33cdfa) right bottom;
  background-repeat: no-repeat;
  background-size: 0.1vw 1.5vw, 1.5vw 0.1vw;
}

.title {
  height: 23%;
  display: flex;
  justify-content: center;
}

.title>img {
  margin-right: 2%;
  margin-top: 2.5%;
  width: 50px;
  height: 50px;
}

.title>h2 {
  font-family: "HeaderFont", sans-serif;
  font-weight: 600;
  animation: alertEffect 2s infinite;
  font-size: calc(100vw * 30 / 1600);
  margin-top: 5%;
}

@keyframes alertEffect {
  0% {
    color: #ff0000;
  }

  50% {
    color: #ffff00;
  }

  100% {
    color: #ff0000;
  }
}

video {
  width: 96%;
  height: 92%;
  object-fit: fill;
  margin: 2% 2%;
}

.my-table {
  height: 90%;
  overflow: hidden;
}

.el-table {
  color: #fff;
  font-size: calc(100vw * 18 / 1920);
}

.my-table>>>.cell {
  font-family: "HeaderFont", sans-serif;
}

.my-table>>>.el-table thead {
  color: #ccc;
}

.my-table>>>.el-table tr {
  background: #11141d;
}

.my-table>>>.el-table tr:first-child:hover {
  background: #606266;
  color: #ccc;
}

.my-table>>>.el-table tr:hover {
  background: #606266;
  color: #111;
}

.my-table>>>.el-table__row>td {
  /* 去除表格线 */
  border: none;
}

.my-table>>>.el-table th.is-leaf {
  /* 去除上边框 */
  border: none;
}

.my-table>>>.el-table::before {
  /* 去除下边框 */
  height: 0;
}

.my-table>>>.el-table th.el-table__cell {
  background-color: #11141d;
}

.my-table>>>.el-table,
.el-table__expanded-cell {
  background-color: #11141d;
}
</style>
