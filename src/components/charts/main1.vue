<template>
    <div class="Echarts">
        <div id="main" style="width: 300px;height:200px;"></div>
    </div>
</template>

<script setup>

import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
import {option} from './config.js';



function myEcharts() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // var option = {
    //     grid: {
    //         left: '0',
    //         top: '30',
    //         right: '0',
    //         bottom: '10',
    //         containLabel: true
    //     },
    //     legend: {
    //         top: 0,
    //         textStyle: {
    //             color: "#fff",
    //         },
    //         itemWidth: 10,  // 设置宽度
    //         itemHeight: 10, // 设置高度
    //     },

    //     tooltip: {
    //         trigger: 'axis',
    //         axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    //         }
    //     },

    //     xAxis: {
    //         type: 'category',
    //         data: ["字段1", "字段2", "字段3", "字段4", "字段5", "字段6"],
    //         axisTick: { //---坐标轴 刻度
    //             show: true, //---是否显示
    //         },

    //         axisLine: { //---坐标轴 轴线
    //             show: true, //---是否显示
    //             lineStyle: {
    //                 color: 'rgba(255,255,255,.1)',
    //                 width: 1,
    //                 type: 'dotted',
    //             },
    //         },
    //         axisLabel: {//X轴文字
    //             textStyle: {
    //                 fontSize: 12,
    //                 color: '#fff'
    //             },
    //         },
    //     },

    //     yAxis: {
    //         type: 'value',
    //         splitLine: {//分割线
    //             show: true,
    //             lineStyle: {
    //                 color: 'rgba(255,255,255,.1)',
    //                 width: 1,
    //                 type: 'dotted'
    //             }
    //         },

    //         axisLabel: {//Y轴刻度值
    //             formatter: '{value}',
    //             textStyle: {
    //                 fontSize: 12,
    //                 color: '#fff'
    //             },

    //         },

    //         axisLine: { //---坐标轴 轴线
    //             show: false, //---是否显示
    //         },
    //     },

    //     series: [{
    //         name: '原方案',
    //         type: 'bar',
    //         data: [3, 7, 4, 9, 3, 5],
    //         barWidth: 15,
    //         barGap: 0.5, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角
    //         itemStyle: {
    //             normal: {
    //                 barBorderRadius: 50,
    //                 color: "#446ACF",
    //             }
    //         },
    //     }, {
    //         name: '建议方案',
    //         type: 'bar',
    //         data: [6, 2, 5, 2, 5, 6],
    //         barWidth: 15, //柱图宽度
    //         barGap: 0.5,
    //         itemStyle: {
    //             normal: { //设置颜色的渐变
    //                 barBorderRadius: 50,
    //                 color: "#4fb69d",
    //             }
    //         },
    //     }]
    // };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

onMounted(() => {
    myEcharts();
})

</script>

<style></style>
