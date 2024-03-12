<template>
  <div class="box">
    <div class="video-box">
      <video src="../assets/video/01.mp4" autoplay loop muted></video>
    </div>
    <div class="text">
      <p>视频源1</p>
      <p> {{ time }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VideoPlayer',
  data() {
    return {
      time: '',
      fullscreen: false,
    }
  },
  methods: {
    getTime() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      return year + '-' + month + '-' + day + '  ' + '  ' + hour + ":" + minutes + ":" + seconds;
    },

  },
  mounted() {
    setInterval(() => {
      this.time = this.getTime() // 2.生命周期挂载完成时，使用定时器实时修改数据nowData
    }, 1000)
  },
}
</script>

<style scoped>
p {
  font-size: calc(100vw * 20 / 1920);
  color: aliceblue;
}

.box {
  width: 100%;
  height: 100%;
  position: relative;
}

.video-box {
  width: 98%;
  height: 95%;
  /* border: 1px deepskyblue solid; */
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
  height: 97%;
  object-fit: fill;
  object-fit: fill;
  margin: 1% 1%;
  /* position: relative; */

}

.text {
  width: 90%;
  color: #fff;
  font-size: 15px;
  position: absolute;
  padding-left: 2%;
  display: flex;
  justify-content: space-between;
}
</style>