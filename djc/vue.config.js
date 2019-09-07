module.exports = {
    devServer: { // 开发 服务时使用
        proxy: {    //配置代理，当你访问带有api的接口的时候，会把pai置空使用target里面的地址代替api前面的内容
            '/api': {
                target: 'http://localhost:3000/api',
                pathRewrite: {
                    '^/api': ''    //不要忘了小箭头^^^^^^^^数字6键
                }
            }
        }
    },
};