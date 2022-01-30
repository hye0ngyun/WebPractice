{
  const http = require('http');
  const url = require('url');
  const fs = require('fs');

  http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const filename = q.pathname.slice(1); // winter.html
    // conste filename = '.' + q.pathname; // ./winter.html
    console.log(q.pathname);
    console.log(filename);
    // url: http://localhost:8080/winter.html
    // q.pathname: /winter.html
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8080);
}
