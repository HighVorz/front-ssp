import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios';
import echarts from 'echarts'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

// vue中使用网页防复制
// document.onselectstart = function() {
//     return false;
// };
// document.oncontextmenu = function() {
//     return false;
// };


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


// 设置 axios 的基本 URL
axios.defaults.baseURL = 'http://127.0.0.1:8000'; // 这里将后端的基本 URL 设置为示例的值，实际上应该根据您的后端地址进行修改
