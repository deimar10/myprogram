var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
    res.end('Tere maailm!');
    });
}).listen(8080);



var fs = require('fs');

//create a file named mynewfile1.txt:
fs.writeFile('mynewfile1.txt', 'This is my new content', function (err) {
    if (err) throw err;
    console.log('Replace');
});