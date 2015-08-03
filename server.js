var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('HW\n');
}).listen(8080, '172.31.12.214');
console.log('Server running at http://172.31.12.214:8080/');
