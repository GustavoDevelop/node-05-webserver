const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'))





app.get('/', function (req, res) {
    res.send('Hello World!')
  })
  app.get('/usuarios', function (req, res) {
    res.send('User: Lauti')
  })

  app.post('/', function (req, res) {
    res.send('POST del path/')
  })

  app.listen(4000);