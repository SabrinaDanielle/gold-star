var path = require('path');
var express = require('express');
var opn = require('opn');

const app = express();
const port = 8080;

app.use(express.static(path.resolve(__dirname + '/public/')));

app.get('/', function(req, res) {
  res.sendfile(path.resolve(__dirname + '/public/views/index.html'));
});

app.get('/grid', function(req, res) {
  res.sendfile(path.resolve(__dirname + '/public/views/grid.html'));
});

app.get('/keyframes', function(req, res) {
  res.sendfile(path.resolve(__dirname + '/public/views/keyframes.html'));
});

app.get('*', function(req, res) {
  res.sendfile(path.resolve(__dirname + '/public/views/404.html'));
});

app.listen(port, function() {
  console.log('Listening on port ' + port + '.');
  opn('http://localhost:' + port);
});
