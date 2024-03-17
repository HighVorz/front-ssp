<template>
  <div class="container">
    <diV class="left">
      <h1>车牌数据查询</h1>
      <div
        style="
          width: 80%;
          margin: 0 auto;
          margin-top: 10%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        "
      >
        <el-input v-model="input" placeholder="请输入内容"></el-input>
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
            color: 'rgb(130, 127, 127)',
            fontSize: '16px',
            backgroundColor: '#10121a',
          }"
        >
          <el-table-column type="index" label="序号" width="80" align="center">
          </el-table-column>
          <el-table-column prop="plate_number" label="车牌" width="width">
          </el-table-column>
          <el-table-column prop="camera_id" label="摄像头" width="width">
          </el-table-column>
          <el-table-column prop="timestamp" label="时间" width="280">
          </el-table-column>
        </el-table>
        <el-pagination
          class="msg-pagination-container"
          background
          :current-page="PRquery.page"
          :page-size="PRquery.size"
          layout="pager,total"
          :total="PRquery.count"
          @current-change="PRhandleCurrentChange"
          style="text-align: center; margin-top: 10px; color: aliceblue"
        >
        </el-pagination>
      </div>
    </diV>
    <div class="right">
      <h1>任务数据查询</h1>
      <div
        style="
          width: 80%;
          margin: 0 auto;
          margin-top: 10%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        "
      >
        <el-input v-model="input2" placeholder="请输入内容"></el-input>
        <el-button
          type="primary"
          icon="el-icon-search"
          style="margin-left: 20px"
          @click="Search2"
          >搜索
        </el-button>
      </div>
      <div style="width: 100%" class="my-table">
        <!-- 表格 -->
        <el-table
          :data="tableData2"
          style="margin-left: 10%; margin-top: 2%; width: 80%"
          :header-cell-style="{
            color: 'rgb(130, 127, 127)',
            fontSize: '16px',
            backgroundColor: '#10121a',
          }"
        >
          <el-table-column type="index" label="序号" width="80" align="center">
          </el-table-column>
          <el-table-column prop="head_number" label="人头数" width="width">
          </el-table-column>
          <el-table-column prop="camera_id" label="摄像头" width="width">
          </el-table-column>
          <el-table-column prop="timestamp" label="时间" width="280">
          </el-table-column>
        </el-table>
        <el-pagination
          class="msg-pagination-container"
          background
          :current-page="query.page"
          :page-size="query.size"
          layout="pager,total"
          :total="query.count"
          @current-change="HChandleCurrentChange"
          style="text-align: center; margin-top: 10px; color: aliceblue"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../utils/request";
export default {
  name: "PersonSearchView",
  data() {
    return {
      input: "",
      input2: "",
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
      tableData: [],
      tableData2: [],
      PRtableData: [],
      HCtableData2: [],
    };
  },
  methods: {
    Search() {
      var arr1 = [];
      console.log(this.tableData);
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].plate_number.includes(this.input)) {
          arr1.push(this.tableData[i]);
        }
      }
      console.log(arr1);
      this.tableData = arr1;

      if (!this.input | !this.tableData) {
        this.tableData = this.PRtableData;
      }
    },
    Search2() {
      var arr1 = [];
      console.log(this.tableData);
      for (var i = 0; i < this.tableData2.length; i++) {
        if (this.tableData2[i].head_number.includes(this.input2)) {
          arr1.push(this.tableData2[i]);
        }
      }
      console.log(arr1);
      this.tableData2 = arr1;
      if (!this.input2 | !this.tableData2) {
        this.tableData2 = this.HCtableData2;
      }
    },
    getPRInfo() {
      var _viewer = this;
      request
        .get(`/api/socket_recv_PR/?page=${_viewer.PRquery.page}`)
        .then((response) => {
          // console.log(response.results);
          _viewer.PRquery.count = response.count;
          _viewer.tableData = response.results;
          _viewer.PRtableData = response.results;

          // console.log(_viewer.terminalTypes);
        });
    },
    getHCInfo() {
      var _viewer = this;
      request
        .get(`/api/socket_recv_HC/?page=${_viewer.query.page}`)
        .then((response) => {
          // console.log(response.results);
          _viewer.query.count = response.count;
          _viewer.tableData2 = response.results;
          _viewer.HCtableData2 = response.results;
          // console.log(_viewer.terminalTypes);
        });
    },
    //分页器
    PRhandleCurrentChange() {
      this.PRquery.page = val;
      // this.$set(this.query, 'pageIndex', val);
      this.getPRInfo();
    },
    HChandleCurrentChange(val) {
      this.query.page = val;
      // this.$set(this.query, 'pageIndex', val);
      this.getHCInfo();
    },
  },
  // 挂载
  mounted() {
    this.getPRInfo();
    this.getHCInfo();
  },
  watch: {
    //监听搜索框内容，当搜索框内容发生变化时调用searchResource方法
    input: {
      handler() {
        this.Search();
      },
    },
    input2: {
      handler() {
        this.Search2();
      },
    },
  },
};
</script>

<style scoped>
.el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: #10121a;
  color: rgb(130, 127, 127);
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

.container {
  width: 100%;
  height: 100%;
  /* background-color: red; */
}
.left {
  position: relative;
  width: 49%;
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
  left: 40%;
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
  left: 40%;
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
