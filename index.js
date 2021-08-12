const express = require('express')

const app = express()

const router = require('./router/index')

app.use('/', router)

app.listen(3000, function() {
  console.log('node app listening at prot 3000');
})
