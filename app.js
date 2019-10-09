
const http = require('http');

http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Wolrd');
}).listen(3000);
// eslint-disable-next-line no-console
console.log('Server running at http://127.0.0.1:3000/');
