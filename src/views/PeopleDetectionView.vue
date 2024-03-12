<template>
  <div class="box">
    <div class="toppart">
      <div class="left" ref="videobox" @click="clickvideo">
        <video src="../assets/video/01.mp4" autoplay loop muted></video>
      </div>
      <!-- 人脸检测，展示相关数据 -->
      <div class="right">
        <div
          v-for="item in otherimages"
          :key="item.id"
          style="width: 100%; height: 20%"
        >
          <div
            style="
              border: 1px solid #33cdfa;
              margin-left: 4%;
              margin-top: 3%;
              height: 100%;
              width: 92%;
              display: flex;
            "
          >
            <img
              :src="item.file_url"
              alt=""
              style="width: 15%; height: 80%; margin-left: 4%; margin-top: 2%"
            />

            <el-progress
              type="circle"
              :percentage="parseFloat((item.prob * 0.01).toFixed(2))"
              :stroke-width="6"
              :width="100"
              :height="100"
              style="margin: auto 0"
            ></el-progress>

            <img
              :src="item.person_info_url"
              alt=""
              style="
                width: 15%;
                height: 80%;
                margin-left: 1%;
                margin-top: 2%;
                object-fit: cover;
              "
            />

            <div style="margin-left: 2%; margin-top: 0%">
              <p>姓名:{{ item.person_name }}</p>
              <p>拍摄时间:{{ item.timestamp }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottompart" style="display: flex">
      <div
        v-for="item in peopleimages"
        :key="item.id"
        style="
          height: 90%;
          width: 10%;
          margin-top: 1%;
          margin-left: 1%;
          object-fit: cover;
          overflow-x: scroll;
        "
      >
        <img :src="item.file_url" alt="" width="90%" height="90%" />
      </div>
    </div>
  </div>
</template>

<script>
import request from "../utils/request";
export default {
  name: "PeopleDetectionView",
  data() {
    return {
      // 实时抓拍到的人脸照片数据
      peopleimages: [
        // require("../assets/images/person.png"),
        // require("../assets/images/person.png"),
        // require("../assets/images/person.png"),
        // require("../assets/images/person.png"),
        // require("../assets/images/person.png"),
        // require("../assets/images/person.png"),
        // require("../assets/images/person.png"),
        // require("../assets/images/person.png"),
        // require("../assets/images/person.png"),
        // require("../assets/images/person.png"),
      ],
      width: 0,
      height: 0,
      // 人脸数据库对比
      otherimages: [],
      fullscreen: false,
    };
  },
  methods: {
    // 选择全屏or退出全屏
    clickvideo() {
      // console.log(this.$refs.item.height);
      if (this.fullscreen) {
        document.exitFullscreen();
      } else {
        this.$refs.videobox.webkitRequestFullscreen();
      }
      this.fullscreen = !this.fullscreen;
    },
    getSDInfo() {
      var _viewer = this;
      request.get("/api/socket_recv_SD").then((response) => {
        _viewer.otherimages = response.results;
        // _viewer.peopleimages = response.results;
      });
    },

    getResaveInfo() {
      var _viewer = this;
      request.get(" /api/socket_send_SD/").then((response) => {
        // console.log(response);
        _viewer.peopleimages = response.results;
      });
    },
  },

  mounted() {
    this.getSDInfo();
    this.getResaveInfo();
  },
};
</script>

<style scoped>
p {
  font-size: calc(100vw * 25 / 1920);
  font-family: "Gill Sans", sans-serif;
  color: #606266;
}

.box {
  height: 100%;
  width: 100%;
  /* background-color: bisque; */
}

.toppart {
  height: 80%;
  width: 100%;
  /* background-color: aqua; */
}

.bottompart {
  height: 20%;
  width: 100%;
  /* background-color: deepskyblue; */
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

.left {
  width: 59%;
  height: 98%;
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

.right {
  width: 40%;
  height: 98%;
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
  /* background-color: royalblue; */
  /* width: 100%; */
  /* height: calc(100%); */
  /* //动态计算长度值 */
  overflow-y: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
video {
  width: 98%;
  height: 97%;
  object-fit: fill;
  margin: 1% 1%;
}
</style>
