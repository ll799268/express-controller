const express = require('express')

const app = express()

// 首页模块
const home = require('./home')
app.get('/home/get_up_load_app', home.getUpLoadApp)
app.get('/home/change_up_load_app_flag', home.changeUpLoadAppFlag)

module.exports = app