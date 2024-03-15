<template>
  <div class="container">
    <diV class="left">
      <h1>个人信息查询</h1>
      <div
        style="
          width: 80%;
          margin: 0 auto;
          margin-top: 5%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        "
      >
        <el-input
          v-model="input"
          placeholder="请输入内容"
          @keyup.enter.native="Search"
        ></el-input>
        <el-button
          type="primary"
          icon="el-icon-search"
          style="margin-left: 20px"
          @click="Search"
          >搜索
        </el-button>
      </div>
      <div style="width: 100%" class="my-table">
        <!-- 表格 -->
        <el-table
          :data="tableData"
          style="margin-left: 10%; margin-top: 2%; width: 80%"
          :header-cell-style="{
            color: 'rgb(255,255,255)',
            fontSize: '16px',
            backgroundColor: '#10121a',
          }"
        >
          <el-table-column type="index" label="序号" width="80" align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="width"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="age" label="年龄" width="width" align="center">
          </el-table-column>
          <el-table-column prop="gender" label="性别" width="80" align="center">
          </el-table-column>
          <el-table-column
            prop="living_address"
            label="住址"
            width="280"
            align="center"
          >
          </el-table-column>
        </el-table>
        <el-pagination
          class="msg-pagination-container"
          background
          :current-page="1"
          :page-size="10"
          layout="pager,total"
          :total="count"
          style="text-align: center; margin-top: 10px; color: aliceblue"
        >
        </el-pagination>
      </div>
    </diV>
  </div>
</template>
  
  <script>
import request from "../utils/request";
export default {
  name: "PersonSearchView",
  data() {
    return {
      count: 0,
      input: "",
      tableData: [],
      tableData2: [],
    };
  },
  watch: {
    //监听input变化，查询表单数据
    input(newValue, oldValue) {
      // 实现input连续输入，只发一次请求
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        var arr1 = [];
        console.log(this.tableData);
        for (var i = 0; i < this.tableData.length; i++) {
          if (
            this.tableData[i].name.includes(this.input) ||
            this.tableData[i].gender.includes(this.input) ||
            this.tableData[i].address.includes(this.input)
          ) {
            arr1.push(this.tableData[i]);
          }
        }
        console.log(arr1);
        this.tableData = arr1;
        if (!this.input | !this.tableData) {
          this.tableData = this.tableData2;
        }
      }, 300);
    },
  },
  methods: {
    Search() {
      var arr1 = [];
      var arr1 = [];
      console.log(this.tableData);
      for (var i = 0; i < this.tableData.length; i++) {
        if (
          this.tableData[i].name.includes(this.input) ||
          this.tableData[i].living_address.includes(this.input) ||
          this.tableData[i].gender.includes(this.input)
        ) {
          arr1.push(this.tableData[i]);
        }
      }
      console.log(arr1);
      this.tableData = arr1;
      if (!this.input | !this.tableData) {
        this.tableData = this.tableData2;
      }
    },

    getPersonInfo() {
      var _viewer = this;
      request.get("/api/person_info").then((response) => {
        console.log(response);
        _viewer.count = response.count;
        _viewer.tableData = response.results;
        _viewer.tableData2 = response.results;
        // console.log(_viewer.terminalTypes);
      });
    },
  },
  // 挂载
  mounted() {
    this.getPersonInfo();
  },
};
</script>
  
  <style>
.el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: #10121a;
  color: rgb(255, 255, 255);
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #10121a !important;
  color: #fff !important;
}

.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #fff !important;
}

.el-table__body tbody tr {
  background-color: #10121a;
}
</style>
  
  
  <style scoped>
.el-table {
  color: #fff;
}
.container {
  width: 100%;
  height: 100%;
  /* background-color: red; */
}
.left {
  position: relative;
  width: 100%;
  height: 100%;
  float: left;
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
  /* background-color: green; */
}

.left h1 {
  position: absolute;
  color: #fff;
  left: 47%;
  top: 25px;
}
.right {
  position: relative;
  width: 50%;
  height: 100%;
  float: right;
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

.right h1 {
  position: absolute;
  color: #fff;
  left: 47%;
  top: 25px;
}
.my-table >>> .el-table__row > td {
  /* 去除表格线 */
  border: none;
}

.my-table >>> .el-table th.is-leaf {
  /* 去除上边框 */
  border: none;
}

.my-table >>> .el-table::before {
  /* 去除下边框 */
  height: 0;
}
</style>
  