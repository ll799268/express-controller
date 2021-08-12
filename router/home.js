const fs = require('fs')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const formatRes = require('../modules/formatRes')

// 获取是否更新系统
function getUpLoadApp (req, res) {
  try {
    res.send(formatRes(0, '', readUploadFile()))
  } catch {
    res.send(formatRes(500))
  }
}

// 修改更新系统状态
function changeUpLoadAppFlag (req, res) {
  const status = writeUploadFile()
  if (status) {
    res.send(formatRes(0, '更新状态成功', status))
  } else {
    res.send(formatRes(500, '更新状态失败'))
  }
}

// 读取文件
function readUploadFile () {
  try {
    return fs.readFileSync(resolve('../config/home.json', 'utf8')).toString()
  } catch (err) {
    throw err
  }
}

// 写入文件
function writeUploadFile () {
  const flag = String(+(!Boolean(+(readUploadFile()))))

  try {
    fs.writeFileSync(resolve('../config/home.json'), flag)
    return flag
  } catch (err) {
    throw err
  }
}

module.exports = {
  getUpLoadApp,
  changeUpLoadAppFlag
}