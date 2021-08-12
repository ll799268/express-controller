// 根据传入的 code 返回状态码、文案
const FORMATCODE = {
  '0': {
    ret: 0,
    msg: ''
  },
  '500': {
    ret: 500,
    msg: '请求出错！'
  }
}

// 返回参数
function formatRes(code, msg, data) {
  return JSON.stringify({
    code: FORMATCODE[code].ret,
    data,
    msg: data ? msg : FORMATCODE[code].msg
  })
}

module.exports = formatRes