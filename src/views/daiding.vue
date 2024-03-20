<template>
  <div class="container">
    <diV class="left">
      <h1><i class="fas fa-tachometer-alt"></i> 超载检测</h1>
      <div class="search_bar">
        <el-input v-model="input" placeholder="请输入内容" @keyup.enter.native="Search" style="
            display: inline-block;
            margin:0px 0px 0px 0px;
            width: 88%;"></el-input>
        <el-button type="primary" icon="el-icon-search" style="margin-left: 2%;
          display: inline-block;
          width: 10%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: '微软雅黑';
          font-weight: bold" @click="Search">搜索
        </el-button>
      </div>
      <div style="width: 100%" class="my-table">
        <!-- 表格 -->
        <el-table :data="tableData" :row-class-name="tableRowClassName"
          style="margin-left: 10%; margin-top: 2%; width: 80%" :header-cell-style="{
          color: 'rgb(130, 127, 127)',
          fontSize: '16px',
          backgroundColor: '#10121a',
        }">
          <el-table-column type="index" label="序号" width="80" align="center">
          </el-table-column>
          <el-table-column prop="camera_id" label="摄像头名" width="width" align="center">
          </el-table-column>
          <el-table-column prop="plate_number" label="车牌号" width="width" align="center">
            <template slot-scope="scope">
              <span class="message-title" @click="checkPlatePicture(scope.row)">{{ scope.row.plate_number }}</span>
              <el-image-viewer v-if="showViewer" :on-close="closeViewer" :url-list="imgList" />
            </template>
          </el-table-column>
          <el-table-column prop="vehicle_type" label="车辆类型" width="width" align="center">
          </el-table-column>
          <el-table-column prop="head_number" label="装载人数" width="width" align="center">
            <template slot-scope="scope">
              <span class="message-title" @click="checkHeadPicture(scope.row)">{{ scope.row.head_number }}</span>
              <el-image-viewer v-if="showViewer2" :on-close="closeViewer2" :url-list="imgList2" />
            </template>
          </el-table-column>
          <el-table-column prop="max_passenger" label="最大乘客数" width="width" align="center">
          </el-table-column>
          <el-table-column prop="timestamp" label="时间戳" width="220" align="center">
            <template slot-scope="scope">
              <span> {{ (scope.row.timestamp * 1000) | formatDate }} </span>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination class="msg-pagination-container" background :current-page="1" :page-size="10"
          layout="pager,total" :total="count" style="text-align: center; margin-top: 10px; color: aliceblue">
        </el-pagination>

        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
            :on-remove="handleRemove" :file-list="fileList" list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </div>
    </diV>
  </div>
</template>

<script>
import request from "../utils/request";
export default {
  name: "PersonSearchView",
  components: {
    "el-image-viewer": () =>
      import("element-ui/packages/image/src/image-viewer"),
  },
  data() {
    return {
      count: 0,
      input: "",
      tableData: [],
      tableData2: [],
      showViewer: false,
      imgList: [],
      showViewer2: false,
      imgList2: [],
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
            this.tableData[i].plate_number.includes(this.input) ||
            this.tableData[i].head_number.includes(this.input) ||
            this.tableData[i].camera_id.includes(this.input)
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
      request.get("/api/same_vehicle").then((response) => {
        console.log(response);
        console.log(response);
        _viewer.count = response.count;
        _viewer.tableData = response.results;
        _viewer.tableData2 = response.results;
      });
    },

    checkPlatePicture(row) {
      console.log(row);
      let arr = [];
      arr.push(row.pr_url);
      this.imgList = arr;
      this.showViewer = true;
    },
    closeViewer() {
      this.showViewer = false;
      // console.log(row);
    },

    checkHeadPicture(row) {
      console.log(row);
      let arr = [];
      arr.push(row.hc_url);
      this.imgList2 = arr;
      this.showViewer2 = true;
    },
    closeViewer2() {
      this.showViewer2 = false;
      // console.log(row);
    },

    //标红table指定行
    tableRowClassName({ row, rowIndex }) {
      // console.log(row.max_passenger);
      //判断条件（quantityStock ，warningLimit ，quantityStock 列表字段信息）
      if (row.head_number > row.max_passenger) {
        // 后面的css样式
        return "warning-row";
      }
      // else if (row.quantityStock > row.warningLimit) {
      //    // 后面的css样式
      //   return 'success-row';

      // }

      // 默认标红第一行
      // if (rowIndex === 0) {
      //   return "warning-row";
      // }

      return "";
    },
  },

  // 挂载
  mounted() {
    this.getPersonInfo();
  },

  filters: {
    //时间戳转换日期格式
    formatDate: function (val) {
      let date = new Date(val);
      let Y = date.getFullYear() + "-";
      let M =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1) + "-"
          : date.getMonth() + 1 + "-";
      let D =
        date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
      let h =
        date.getHours() < 10
          ? "0" + date.getHours() + ":"
          : date.getHours() + ":";
      let m =
        date.getMinutes() < 10
          ? "0" + date.getMinutes() + ":"
          : date.getMinutes() + ":";
      let s =
        date.getSeconds() < 10
          ? "0" + date.getSeconds() + "."
          : date.getSeconds() + ".";
      let S =
        date.getMilliseconds() < 10
          ? "0" + date.getMilliseconds()
          : date.getMilliseconds();
      return Y + M + D + h + m + s + S;
    },
    //经纬度保留7位小数
    formatLocation: function (val) {
      return parseFloat(val).toFixed(7);
    },
  },
};
</script>

<style scoped>

.search_bar {
  width: 80%;
  margin: 0 auto;
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

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

.el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell {
  color: #10121a !important;
}

.el-table__body tbody tr {
  background-color: #10121a;
}

/* /deep/  */
.el-table .warning-row {
  color: #f51f1f !important;
  /* background-color: #fff; */
}

.message-title {
  cursor: pointer;
}

.el-table {
  color: #fff;
}

.container {
  width: 100%;
  height: 100%;
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
  text-align: center;
  color: #FF7F00;
  font-size: large;
  font-family: "微软雅黑" format('truetype');
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
</style>