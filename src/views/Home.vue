<template>

    <body class="ksh">
        <div id="load" v-if="isLoad">
            <div class="load_img">
                <!-- 加载动画 -->
                <img class="jzxz1" src="../assets/images/jzxz1.png">
                <img class="jzxz2" src="../assets/images/jzxz2.png">
            </div>
        </div>
        <div class="head_top"><span>通用大数据可视化展示模版</span></div>
        <div class="visual">
            <div class="visual_left">
                <div class="visual_box">
                    <div class="visual_title">
                        <span>交通流量</span>
                        <img src="../assets/images/ksh33.png">
                    </div>
                    <!-- 🚀 -->
                    <Chart_main1 class="visual_chart" >

                    </Chart_main1>
                </div>
                <div class="visual_box">
                    <div class="visual_title">
                        <span>交通工具流量</span>
                        <img src="../assets/images/ksh33.png">
                    </div>
                    <!-- 🚀 -->
                    <Chart_main2 class="visual_chart" >

                    </Chart_main2>
                </div>
                <div class="visual_box">
                    <div class="visual_title">
                        <span>收费站车流量</span>
                        <img src="../assets/images/ksh33.png">
                    </div>
                    <div class="visual_chart sfzcll">
                        <a>运输方式</a>
                        <a>客运量</a>
                        <a>货运量</a>
                        <div class="sfzcll_pos_box">
                            <div class="sfzcll_box">
                                <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
                                <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
                                <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
                                <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
                                <label><img src="../assets/images/ksh35.png">公路运输</label>
                                <div class="sfzcll_smallBk">
                                    <div class="ygl">
                                        <span>4347.2万</span>人
                                    </div>
                                </div>
                                <div class="sfzcll_smallBk">
                                    <div class="ygh">
                                        <span>4347.2万</span>人
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="sfzcll_box">
                                <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
                                <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
                                <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
                                <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
                                <label><img src="../assets/images/ksh35.png">公路运输</label>
                                <div class="sfzcll_smallBk">
                                    <div class="ygl">
                                        <span>4347.2万</span>人
                                    </div>
                                </div>
                                <div class="sfzcll_smallBk">
                                    <div class="ygh">
                                        <span>4347.2万</span>人
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="sfzcll_box">
                                <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
                                <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
                                <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
                                <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
                                <label><img src="../assets/images/ksh35.png">公路运输</label>
                                <div class="sfzcll_smallBk">
                                    <div class="ygl">
                                        <span>4347.2万</span>人
                                    </div>
                                </div>
                                <div class="sfzcll_smallBk">
                                    <div class="ygh">
                                        <span>4347.2万</span>人
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="visual_con">
                <div class="visual_conTop">
                    <div class="visual_conTop_box visual_conTop1">
                        <div>
                            <h3>当前警情数(起)</h3>
                            <p>67</p>
                            <div class="conTop_smil">
                                <a class="sz">日环比:<span>+3%</span><i class="fa fa-long-arrow-up"></i></a>
                                <a class="xd">周环比:<span>-2%</span><i class="fa fa-long-arrow-down"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="visual_conTop_box visual_conTop2">
                        <div>
                            <h3>区域拥堵指数</h3>
                            <p>1.4</p>
                            <div class="conTop_smil">
                                <a class="">缓行</a>
                                <a class="">平均车速<span>120</span>KM/H </a>
                            </div>
                        </div>
                    </div>
                    <div class="visual_conTop_box visual_conTop1">
                        <div>
                            <h3>当前警情数(起)</h3>
                            <p>99</p>
                            <div class="conTop_smil">
                                <a class="sz">日环比:<span>+3%</span><i class="fa fa-long-arrow-up"></i></a>
                                <a class="xd">周环比:<span>-2%</span><i class="fa fa-long-arrow-down"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="visual_conTop_box visual_conTop2">
                        <div>
                            <h3>当前警情数(起)</h3>
                            <p>7421</p>
                            <div class="conTop_smil">
                                <a class="null">null</a>
                                <a class="xd">月环比:<span>-2%</span><i class="fa fa-long-arrow-down"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="visual_conBot">
                    <img class="visual_conBot_l" src="../assets/images/ksh42.png">
                    <img class="visual_conBot_2" src="../assets/images/ksh43.png">
                    <img class="visual_conBot_3" src="../assets/images/ksh44.png">
                    <img class="visual_conBot_4" src="../assets/images/ksh45.png">
                    <div class="visual_chart_text">
                        <h1>出行服务+大数据</h1>
                        <h2>山西省交通大数据分析平台</h2>
                    </div>
                    <!-- 🚀 -->
                    <Chart_main8 class="visual_chart" ></Chart_main8>
                    <div class="visual_conBot_bot">
                        <div class="visualSssf_left">
                            <h3>今日实时收费</h3>
                            <a style="display:block">全省数据</a>
                            <a>大同北</a>
                            <a>大同南</a>
                            <a>朔州</a>
                            <a>吕梁北</a>
                            <a>吕梁南</a>
                            <a>太原</a>
                            <a class="active">晋中</a>
                            <a>太旧</a>
                            <a>长治</a>
                        </div>
                        <div class="visualSssf_right">
                            <!-- 🚀 -->
                            <Chart_main5 class="visualSssf_right_box" ></Chart_main5>
                            <Chart_main6 class="visualSssf_right_box" ></Chart_main6>
                            <Chart_main7 class="visualSssf_right_box" ></Chart_main7>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
            <div class="visual_right">
                <div class="visual_box">
                    <div class="visual_title">
                        <span>本月发生事件</span>
                        <img src="../assets/images/ksh33.png">
                    </div>
                    <div class="swiper-container visual_swiper1 visual_chart">
                        <div class="swiper-wrapper">
                            <!-- 🚀 -->
                            <Chart_main3 class="swiper-slide" ></Chart_main3>
                            <Chart_main31 class="swiper-slide" ></Chart_main31>
                        </div>
                    </div>
                </div>
                <div class="visual_box visualSfzsfl">
                    <div class="visual_title">
                        <span>收费站收费量</span>
                        <img src="../assets/images/ksh33.png">
                    </div>
                    <!-- 🚀 -->
                    <Chart_main9 class="visual_chart" >

                    </Chart_main9>
                    <div class="visual_table">
                        <table>
                            <tr>
                                <td>小型车</td>
                                <td>中型车</td>
                                <td>大型车</td>
                            </tr>
                            <tr>
                                <td>2486万</td>
                                <td>2486万</td>
                                <td>2486万</td>
                            </tr>
                            <tr>
                                <td>2486万</td>
                                <td>2486万</td>
                                <td>2486万</td>
                            </tr>
                            <tr>
                                <td>2486万</td>
                                <td>2486万</td>
                                <td>2486万</td>
                            </tr>
                            <tr>
                                <td>2486万</td>
                                <td>2486万</td>
                                <td>2486万</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="visual_box">
                    <div class="visual_title">
                        <span>收费站收费排行</span>
                        <img src="../assets/images/ksh33.png">
                    </div>
                    <div class="swiper-container visual_swiper2 visual_chart">
                        <div class="swiper-wrapper">
                            <!-- 🚀 -->
                            <Chart_main4 class="swiper-slide" ></Chart_main4>
                            <Chart_main41 class="swiper-slide" ></Chart_main41>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>

    </body>
</template>

<script setup>
// import '../assets/js/jquery.min.js'
// import '../assets/js/bootstrap.min.js'
// import '../assets/js/china.js'
// import '../assets/js/swiper.min.js'
// import '../assets/js/visual.js'
// import '../assets/js/echarts.min.js'
// import '../assets/js/chartMap.js'

// import * as echarts from 'echarts';

import { ref, onMounted } from 'vue'
import Chart_main1 from '../components/charts/main1.vue';
import Chart_main2 from '../components/charts/main2.vue';
import Chart_main3 from '../components/charts/main3.vue';
import Chart_main4 from '../components/charts/main4.vue';
import Chart_main5 from '../components/charts/main5.vue';
import Chart_main6 from '../components/charts/main6.vue';
import Chart_main7 from '../components/charts/main7.vue';
import Chart_main8 from '../components/charts/main8.vue';
import Chart_main9 from '../components/charts/main9.vue';
import Chart_main31 from '../components/charts/main31.vue';
import Chart_main41 from '../components/charts/main41.vue';

const isLoad = ref(true);

onMounted(() => {
    setTimeout(finishLoadAnimation, 1000); // 2秒后执行fetchSomething函数
});

function finishLoadAnimation(){
    isLoad.value = false;
}



</script>

<style moudle>
@import '../assets/css/visual.css';
@import '../assets/css/swiper.min.css';
@import '../assets/bootstrap/3.3.4/css/bootstrap.css';
</style>