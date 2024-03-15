<template>
    <div class="Echarts">
        <div id="main4" style="width: 300px;height:200px;"></div>
    </div>
</template>

<script setup>

import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
// import {option} from './config.js';



function myEcharts() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main4'));

    // myChart.setOption(option);
}

onMounted(() => {
    myEcharts();
})

</script>

<style></style>
