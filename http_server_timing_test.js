const http = require('http');
const port = 3000;

http.createServer(function(req, resp) {
    console.log(req.url);
    resp.writeHead(200, {
            'content-type': 'text/html',
            'server-timing': `cache-hit, cache-fetch;desc="Cache Fetch";dur=${Math.floor(Math.random()*10)+40}, ` +
                             `app;desc=App;dur=${Math.floor(Math.random()*20)+70}, ` +
                             `db-read;desc="DB Read";dur=${Math.floor(Math.random()*30)+100}, ` +
                             `db-write;desc="DB Write";dur=${Math.floor(Math.random()*40)+200}`,
    });
    resp.end('ok');
}).listen(3000);

console.log(`listening on ${port}...`);
