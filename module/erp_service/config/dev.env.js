'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL:'"http://106.12.19.134:8702"',//全局接口路径
  upload_BASE_URL:'"http://106.12.19.134:8080/static/"'//文件资源路径
});
