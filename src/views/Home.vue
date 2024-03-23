<template>
    <div class="ksh">
        <div id="load" v-if="isLoad">
            <div class="load_img">
                <!-- 加载动画 -->
                <img class="jzxz1" src="../assets/images/jzxz1.png">
                <img class="jzxz2" src="../assets/images/jzxz2.png">
            </div>
        </div>
        <div class="head_top"><span>超员检测系统平台</span></div>
        <div class="visual">
            <div class="visual_left">
                <div class="visual_box">
                    <div class="visual_title">
                        <span>数据部分1</span>
                        <img src="../assets/images/ksh33.png">
                    </div>
                    <!-- 🚀 -->
                    <Chart_main1 class="visual_chart">
                    </Chart_main1>
                </div>
                <div class="visual_box">
                    <div class="visual_title">
                        <span>数据部分2</span>
                        <img src="../assets/images/ksh33.png">
                    </div>
                    <!-- 🚀 -->
                    <Chart_main2 class="visual_chart">

                    </Chart_main2>
                </div>
                <div class="visual_box">
                    <div class="visual_title">
                        <span>数据部分3</span>
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
                            <h3>当前超车数(起)</h3>
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
                            <h3>当前超车数(起)</h3>
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
                        <!-- <h1>超员检测</h1>
                        <h2>上海市地区详情</h2> -->
                    </div>
                    <!-- 🚀 -->
                    <div class="baiduMap">
                        <div id="container">
                            <Chart_main8 ></Chart_main8>
                        </div>        
                    </div>
                    <div class="visual_conBot_bot">  
                        <div class="visualSssf_left">
                            <h3>超员数量统计</h3>
                            <a style="display:block;width: 20%;">全市数据</a>
                            <a @click="passParams('黄浦区')">黄浦区</a>
                            <a @click="passParams('徐汇区')">徐汇区</a>
                            <a @click="passParams('长宁区')">长宁区</a>
                            <a @click="passParams('静安区')">静安区</a>
                            <a @click="passParams('普陀区')">普陀区</a>
                            <a @click="passParams('虹口区')">虹口区</a>
                            <a @click="passParams('杨浦区')">杨浦区</a>
                            <a @click="passParams('闵行区')">闵行区</a>
                            <a @click="passParams('上海市宝山区')">宝山区</a>
                            <a @click="passParams('嘉定区')">嘉定区</a>
                            <a @click="passParams('金山区')">金山区</a>
                            <a @click="passParams('松江区')">松江区</a>
                            <a @click="passParams('青浦区')">青浦区</a>
                            <a @click="passParams('奉贤区')">奉贤区</a>
                            <a @click="passParams('崇明区')">崇明区</a>
                            <a @click="passParams('奉贤区')">奉贤区</a>
                            <a style="width: 20%;" @click="passParams('浦东新区')">浦东新区</a>
                        </div>
                        <div class="visualSssf_right">
                            <!-- 🚀 -->
                            <Chart_main5 class="visualSssf_right_box"></Chart_main5>
                            <Chart_main6 class="visualSssf_right_box"></Chart_main6>
                            <Chart_main7 class="visualSssf_right_box"></Chart_main7>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
            <div class="visual_right">
                <div class="visual_box">
                    <div class="visual_title">
                        <span>视频源1</span>
                        <img src="../assets/images/ksh33.png">
                    </div>
                    <div class="swiper-container visual_swiper1 visual_chart">
                        <div class="swiper-wrapper">
                            <!-- 🚀 -->
                            <Chart_main3 class="swiper-slide"></Chart_main3>
                            <Chart_main31 class="swiper-slide"></Chart_main31>
                        </div>
                    </div>
                </div>
                <div class="visual_box visualSfzsfl">
                    <div class="visual_title">
                        <span>视频源2</span>
                        <img src="../assets/images/ksh33.png">
                    </div>
                    <!-- 🚀 这个不需要-->
                    <!-- <Chart_main9 class="visual_chart" >

                    </Chart_main9> -->
                    <div class="visual_moniter2">
                        <!-- 用来放第一个监控画面 -->
                    </div>
                </div>
                <div class="visual_box">
                    <div class="visual_title">
                        <span>超车严重情况</span>
                        <img src="../assets/images/ksh33.png">
                    </div>
                    <div class="swiper-container visual_swiper2 visual_chart">
                        <div class="swiper-wrapper">
                            <!-- 🚀 -->
                            <Chart_main4 class="swiper-slide"></Chart_main4>
                            <Chart_main41 class="swiper-slide"></Chart_main41>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<!-- <script src="../assets/js/jquery.min.js"></script>
<script src="../assets/js/bootstrap.min.js"></script>
<script src="../assets/js/echarts.min.js"></script>
<script src="../assets/js/swiper.min.js"></script>
<script src="../assets/js/visual.js"></script>
<script src="../assets/js/shanghai.js"></script>
<script src="../assets/js/chartMap.js"></script> -->
<script setup>
import '../assets/js/jquery.min.js'
// import '../assets/js/bootstrap.min.js'
import '../assets/js/shanghai.js'
import '../assets/js/swiper.min.js'
import '../assets/js/echarts.min.js'
// import '../assets/js/chartMap.js'
// import '../assets/js/visual.js'

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
// import Chart_main9 from '../components/charts/main9.vue';
import Chart_main31 from '../components/charts/main31.vue';
import Chart_main41 from '../components/charts/main41.vue';
import store from '../vuex/store.js'
const isLoad = ref(true);

onMounted(() => {
    // 在组件挂载后加载外部资源
    setTimeout(finishLoadAnimation, 1000); // 2秒后执行fetchSomething函数
});

function finishLoadAnimation() {
    isLoad.value = false;
}

function passParams(param) {
    store.commit('incCount', param);
}


</script>
<!--设置是否为缩放模式 -->
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
<style src="../assets/bootstrap/3.3.4/css/bootstrap.css"></style>
<style src="../assets/css/visual.css"></style>
<style src="../assets/css/swiper.min.css"></style>

<style moudle>
/* @import '../assets/css/visual.css';
@import '../assets/css/swiper.min.css';
@import '../assets/bootstrap/3.3.4/css/bootstrap.css'; */
</style>
