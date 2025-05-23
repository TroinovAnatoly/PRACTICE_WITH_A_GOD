var http = require('http');
var fs = require('fs');
var path = require('path');

function onRequest(require, respone) {
    let file_path = '.' + (require.url === '/' ? '/index.html' : require.url);
    console.log(require.url);
    
    file_path = path.normalize(file_path);

    let ext = path.extname(file_path);
    let contentType = {
        '.html': 'text/html; charset=utf-8',
        '.css': 'text/css',
        '.js': 'application/javascript'
    }[ext] || 'text/plain';

    fs.readFile(file_path, function (err, data) {
        if (err) {
            respone.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            respone.end('404 Not Found');
        } else {
            respone.writeHead(200, { 'Content-Type': contentType });
            respone.end(data);
        }
    });
}

var server = http.createServer(onRequest);
server.listen(3000, '0.0.0.0');