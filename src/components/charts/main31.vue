<template>
    <div class="Echarts">
        <div id="main31" style="width: 300px;height:200px;"></div>
    </div>
</template>

<script setup>

import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
// import { option } from './config.js';



function myEcharts() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main31'));


    // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);
}

onMounted(() => {
    myEcharts();
})

</script>

<style></style>