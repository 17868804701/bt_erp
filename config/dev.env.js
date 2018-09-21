'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL:'"http://10.50.0.144:8702/"',  //全局接口路径
  admin_BASE_URL:'"http://10.50.0.144:8080/"',//后台管理系统路径
  upload_BASE_URL:'"http://10.50.0.144:8088/"',//文件资源路径
  iframe_BASE_URL:'"http://localhost:8081/#/"',//iframe跳转路径
})
