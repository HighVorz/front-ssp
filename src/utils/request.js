import axios from "axios";

const requests = axios.create({
    timeout: 5000 // 请求超时时间
})


// response 拦截器
requests.interceptors.response.use(response => {
    // const resp = response.data;
    // // 状态码判断
    // if (resp.code !== 20000) {
    //     if (resp.code === 20001) {
    //         console.log(resp.message);
    //         return Promise.reject('error');
    //     }
    // } else {
    //     return resp;
    // }
    return response.data

}, error => {
    console.log('err' + error) // for debug
    return Promise.reject(error);
});

export default requests