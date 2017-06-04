var express = require('express')
var app = express()
var compression = require('compression')

var config = require('./config/index')

app.use(compression({ threshold: 0 }))
app.use(express.static(__dirname + '/dist'))
app.use('/' + config.collabName + '/', express.static(__dirname + '/dist'))

app.all('/*', function (req, res, next) {
  res.sendFile('index.html', { root: __dirname + '/dist' })
})

var server = app.listen(8070, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
