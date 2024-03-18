<template>
    <div class="Echarts">
        <div id="main7" style="width: 125px;height:200px;"></div>
    </div>
</template>

<script setup>

import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
// import { option } from './config.js';



function myEcharts() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main7'));

    var shadowColor = '#374b86';
    var value = 46;
    const option7 = {

        title: {
            //text: `${value}万辆`,
            text: `今日报警`,
            subtext: '',
            left: 'center',
            top: 'center',//top待调整
            textStyle: {
                color: '#fff',
                fontSize: 16,
                fontFamily: 'PingFangSC-Regular'
            },
            subtextStyle: {
                color: '#ff',
                fontSize: 14,
                fontFamily: 'PingFangSC-Regular',
                top: 'center'
            },
            itemGap: -1//主副标题间距
        },

        series: [{
            name: 'pie1',
            type: 'pie',
            clockWise: true,
            radius: ['65%', '70%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: value,
                name: 'completed',
                itemStyle: {
                    normal: {
                        borderWidth: 8,
                        borderColor: {
                            colorStops: [{
                                offset: 0,
                                color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                            }]
                        },
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: 'gap',
                value: 100 - value,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        color: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 0
                    }
                }
            }]
        }]
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option7);
}

onMounted(() => {
    myEcharts();
})

</script>

<style></style>