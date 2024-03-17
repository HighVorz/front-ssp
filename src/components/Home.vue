<template>
  <div class="homeWrap">
    <el-container class="home-container">
      <el-header class="home-header" style="height:70px;">
        <div class="topTitle">
          <div class="left nav">
            <ul style="margin-right: 2%; margin-left: 1%">
              <li :class="{ nav_active: show == '/flow' }">
                <router-link to="/home"><i class="nav_1"></i>首页</router-link>
              </li>
              <li :class="{ nav_active: show == '/securityAssess' }">
                <router-link to="/monitor"><i class="nav_2"></i>视频监控</router-link>
              </li>
              <li :class="{ nav_active: show == '/networkTraffic' }">
                <router-link to="/detection"><i class="nav_6"></i>人物检测</router-link>
              </li>
            </ul>
          </div>
          <div class="center-topTitle">
            <h1>超员检测系统平台</h1>
          </div>
          <div class="right nav">
            <ul style="margin-left: 2%">
              <li :class="{ nav_active: show == '/networkTraffic' }">
                <router-link to="/daiding"><i class="nav_6"></i>超载检测</router-link>
              </li>
              <li :class="{ nav_active: show == '/terminalStatus' }">
                <router-link to="/license"><i class="nav_4"></i>信息查询</router-link>
              </li>
              <!-- <li :class="{ nav_active: show == '/offTerminal' }">
                <router-link to="/person"
                  ><i class="nav_5"></i>数据查询</router-link
                >
              </li> -->
            </ul>
          </div>
        </div>
      </el-header>

      <el-main class="home-main">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: 0,
    };
  },
  /*高亮选中：用路由跳转来判断*/
  watch: {
    $route() {
      this.show = this.$route.path;
    },
  },
  methods: {},
};
</script>

<style>
@import url("../assets/css/header.css");
.homeWrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.home-container {
  height: 100%;
}

.home-header {
  background-color: #10121a;
}

.home-main {
  background-color: #10121a;
  height: 80%;
}
</style>
