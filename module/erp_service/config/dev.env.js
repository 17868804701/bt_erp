'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL:'"http://10.50.0.144:8702"',
  upload_BASE_URL:'"http://10.50.0.144:8080"'
});
