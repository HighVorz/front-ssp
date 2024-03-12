import requests from "@/utils/request";
// 设置请求地址
let base = ''

export default {
    getNetSegs() {
        return requests({
            url: base + '/terminalStatus/getNetSegs',
            method: 'get'
        })
    },
    getAlertFlow() {
        return requests({
            url: base + '/terminalStatus/getAlertFlow',
            method: 'get'
        })
    }
}