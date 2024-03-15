<template>
    <div class="Echarts">
        <div id="main1" style="width: 300px;height:200px;"></div>
    </div>
</template>

<script setup>

import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
// import {option1} from './config.vue';





function myEcharts() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main1'));

    //
    var data = {
        id: 'multipleBarsLines',
        legendBar: ['高速公路', '城镇公路'],
        symbol: ' ', //数值是否带百分号        --默认为空 ''
        legendLine: ['环比', '同比'],
        xAxis: ['2014', '2015', '2016', '2017', '2018',
            '2019'
        ],
        yAxis: [
            [8, 10, 10, 11, 4, 13],
            [10, 7, 8, 8, 7, 9]
        ],
        lines: [
            [10, 10, 9, 11, 7, 4],
            [6, 12, 12, 2, 4, 4]
        ],
        barColor: ['#009883', '#e66922'], //柱子颜色 必填参数
        lineColor: ['#fd6665', '#fba73b'], // 折线颜色

    }

    var myData = (function test() {
        let yAxis = data.yAxis || []
        let lines = data.lines || []
        let legendBar = data.legendBar || []
        let legendLine = data.legendLine || []
        var symbol = data.symbol || ' '
        let seriesArr = []
        let legendArr = []
        yAxis && yAxis.forEach((item, index) => {
            legendArr.push({
                name: legendBar && legendBar.length > 0 && legendBar[index]
            })
            seriesArr.push({
                name: legendBar && legendBar.length > 0 && legendBar[index],
                type: 'bar',
                barGap: '0.5px',
                data: item,
                barWidth: data.barWidth || 12,
                label: {
                    normal: {
                        show: false,
                        formatter: '{c}' + symbol,
                        position: 'top',
                        textStyle: {
                            color: '#000',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            textAlign: 'left',
                            fontSize: 11,
                        },
                    },
                },
                itemStyle: { //图形样式
                    normal: {
                        barBorderRadius: 0,
                        borderWidth: 1,
                        borderColor: '#ddd',
                        color: data.barColor[index]
                    },
                }
            })
        })

        lines && lines.forEach((item, index) => {
            legendArr.push({
                name: legendLine && legendLine.length > 0 && legendLine[index]
            })
            seriesArr.push({
                name: legendLine && legendLine.length > 0 && legendLine[index],
                type: 'line',
                data: item,
                itemStyle: {
                    normal: {
                        color: data.lineColor[index],
                        lineStyle: {
                            width: 2,//折线宽度
                            type: 'solid',
                        }
                    }
                },
                label: {
                    normal: {
                        show: false, //折线上方label控制显示隐藏
                        position: 'top',
                    }
                },
                symbol: 'circle',
                symbolSize: 5
            })
        })

        return {
            seriesArr,
            legendArr
        }
    })()
    const option1 = {




        grid: {
            left: '0',
            top: '30',
            right: '0',
            bottom: '10',
            containLabel: true
        },
        legend: {

            top: 0,

            textStyle: {

                color: "#fff",

            },

            itemWidth: 10,  // 设置宽度

            itemHeight: 10, // 设置高度

        },

        tooltip: {

            trigger: 'axis',

            axisPointer: { // 坐标轴指示器，坐标轴触发有效

                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

            }

        },

        xAxis: {

            type: 'category',

            data: ["字段1", "字段2", "字段3", "字段4", "字段5", "字段6"],

            axisTick: { //---坐标轴 刻度

                show: true, //---是否显示

            },

            axisLine: { //---坐标轴 轴线

                show: true, //---是否显示

                lineStyle: {

                    color: 'rgba(255,255,255,.1)',

                    width: 1,

                    type: 'dotted',

                },

            },

            axisLabel: {//X轴文字

                textStyle: {

                    fontSize: 12,

                    color: '#fff'

                },

            },

        },

        yAxis: {

            type: 'value',

            splitLine: {//分割线

                show: true,

                lineStyle: {
                    color: 'rgba(255,255,255,.1)',

                    width: 1,
                    type: 'dotted'

                }

            },

            axisLabel: {//Y轴刻度值

                formatter: '{value}',

                textStyle: {

                    fontSize: 12,

                    color: '#fff'

                },

            },

            axisLine: { //---坐标轴 轴线

                show: false, //---是否显示

            },

        },

        series: [{

            name: '原方案',

            type: 'bar',

            data: [3, 7, 4, 9, 3, 5],

            barWidth: 15,

            barGap: 0.5, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角

            itemStyle: {

                normal: {
                    barBorderRadius: 50,
                    color: "#446ACF",

                }

            },

        }, {

            name: '建议方案',

            type: 'bar',
            data: [6, 2, 5, 2, 5, 6],
            barWidth: 15, //柱图宽度
            barGap: 0.5,
            itemStyle: {

                normal: { //设置颜色的渐变
                    barBorderRadius: 50,
                    color: "#4fb69d",

                }

            },

        }]

    };

    myChart.setOption(option1);
}

onMounted(() => {
    myEcharts();
})

</script>

<style></style>
