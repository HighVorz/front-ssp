<template>
    <div class="Echarts">
        <div id="main3" style="width: 350px;height:180px;"></div>
    </div>
</template>

<script setup>

import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';


function myEcharts() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main3'));


    //本月发生事件1
    var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
    var data = [{
        "name": "超速",
        "value": 30
    },
    {
        "name": "闯红灯",
        "value": 30
    },
    {
        "name": "闯禁行",
        "value": 42
    },
    {
        "name": "违停",
        "value": 50
    },
    {
        "name": "逆行",
        "value": 34
    }
    ];

    var max = data[0].value;
    data.forEach(function (d) {
        max = d.value > max ? d.value : max;
    });

    var renderData = [{
        value: [],
        name: "告警类型TOP5",
        symbol: 'none',
        lineStyle: {
            normal: {
                color: '#ecc03e',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                    [{
                        offset: 0,
                        color: 'rgba(203, 158, 24, 0.8)'
                    }, {
                        offset: 1,
                        color: 'rgba(190, 96, 20, 0.8)'
                    }],
                    false)
            }
        }
    }];


    data.forEach(function (d, i) {
        var value = ['', '', '', '', ''];
        value[i] = max,
            renderData[0].value[i] = d.value;
        renderData.push({
            value: value,
            symbol: 'circle',
            symbolSize: 12,
            lineStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            itemStyle: {
                normal: {
                    color: color[i],
                }
            }
        })
    })
    var indicator = [];

    data.forEach(function (d) {
        indicator.push({
            name: d.name,
            max: max,
            color: '#fff'
        })
    })


    const option3 = {
        tooltip: {
            show: true,
            trigger: "item"
        },
        radar: {
            center: ["50%", "50%"],//偏移位置
            radius: "80%",
            startAngle: 40, // 起始角度
            splitNumber: 4,
            shape: "circle",
            splitArea: {
                areaStyle: {
                    color: 'transparent'
                }
            },
            axisLabel: {
                show: false,
                fontSize: 20,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "normal"
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            },
            indicator: indicator
        },
        series: [{
            type: "radar",
            data: renderData
        }]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option3);
}

onMounted(() => {
    myEcharts();
})

</script>

<style></style>