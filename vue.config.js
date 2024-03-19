module.exports = {
    lintOnSave: false,
    devServer: {
        // 自动打开浏览器
        // open: true,
        // host: 'localhost',
        // 端口
        port: 80,
        disableHostCheck: true,
        // proxy: {
        //     '/api': {
        //         target: 'http://115.25.46.178/api',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    }
}