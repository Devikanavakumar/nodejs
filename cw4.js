const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request received');

  if (req.url === '/hello' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // use HTML
    res.end('<h1>Hello World</h1>');
  } 
  else if (req.url === '/data' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // HTML for heading
    res.end('<h1>About ABC College</h1>');
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 page not found</h1>');
  }
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});