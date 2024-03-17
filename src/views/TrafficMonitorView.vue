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
        <div class="row1" style="text-align: center; width: 100%; height: 28%">
          <el-button type="primary" @click="changevideo(1)" ref="button1"
            style="height: 100%; font-size: small;padding:5px 5px 5px 5px;">车牌直播源1</el-button>
          <el-button type="primary" @click="changevideo(2)"
            style="height: 100%; font-size: small;padding:5px 5px 5px 5px;">车牌直播源2</el-button>
          <el-button type="primary" @click="changevideo(7)"
            style="height: 100%; font-size: small;padding:5px 5px 5px 5px;">车载直播源7</el-button>
          <el-button type="primary" @click="changevideo(8)"
            style="height: 100%; font-size: small;padding:5px 5px 5px 5px;">车载直播源8</el-button>
        </div>
        <div class="row2" style="text-align: center; margin-top: 2%; width: 100%; height: 28%">
          <el-button type="primary" @click="changevideo(3)"
            style="height: 100%; font-size: small;padding:5px 5px 5px 5px;">车牌直播源3</el-button>
          <el-button type="primary" @click="changevideo(4)"
            style="height: 100%; font-size: small;padding:5px 5px 5px 5px;">车牌直播源4</el-button>
          <el-button type="primary" @click="changevideo(9)"
            style="height: 100%; font-size: small;padding:5px 5px 5px 5px;">车载直播源9</el-button>
          <el-button type="primary" @click="changevideo(10)"
            style="height: 100%; font-size: small;padding:5px 5px 5px 5px;">车载直播源10</el-button>
        </div>
        <div class="row3" style="text-align: center; margin-top: 2%; width: 100%; height: 28%">
          <el-button type="primary" @click="changevideo(5)"
            style="height: 100%; font-size: small;padding:5px 5px 5px 5px;">车牌直播源5</el-button>
          <el-button type="primary" @click="changevideo(6)"
            style="height: 100%; font-size: small;padding:5px 5px 5px 5px;">车牌直播源6</el-button>

          <el-button type="primary" @click="changevideo(11)"
            style="height: 100%; font-size: small;padding:5px 5px 5px 5px;">车载直播源11</el-button>
          <el-button type="primary" @click="changevideo(12)"
            style="height: 100%; font-size: small;padding:5px 5px 5px 5px;">车载直播源12</el-button>
        </div>
      </div>
      <!-- el-table展示数据 -->
      <div class="right-part2">
        <div class="title" style="height: 15%; display: flex; justify-content: center">
          <img src="../assets/images/nav_3.png" style="
              margin-right: 2%;
              margin-top: 2.5%;
              width: 50px;
              height: 50px;
            " />
          <h2 style="color: #fff; font-size: calc(100vw * 30 / 1920)">
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

.row1 button,
.row2 button,
.row3 button {
  font-size: calc(100vw * 18 / 1920);
}

.main-box {
  width: 100%;
  height: 100%;
  display: flex;
}

.left-box {
  width: 70%;
  height: 100%;
}

.right-box {
  width: 29%;
  height: 100%;
  margin-left: 1%;
}

.left-top {
  width: 100%;
  height: 64%;
  /* background-color: rebeccapurple; */
  box-shadow: 0 0 1.5vw #1f69b9b9 inset;
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
  height: 35%;
  box-shadow: 0 0 1.5vw #1f69b9b9 inset;
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

.right-part1 {
  width: 100%;
  height: 35%;
  box-shadow: 0 0 1.5vw #1f69b9b9 inset;
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
  height: 65%;
  margin-top: 1%;
  box-shadow: 0 0 1.5vw #1f69b9b9 inset;
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

video {
  width: 98%;
  height: 96%;
  object-fit: fill;
  margin: 1% 1%;
}

.my-table {
  height: 90%;
}

.el-table {
  color: #fff;
  font-size: calc(100vw * 18 / 1920);
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
