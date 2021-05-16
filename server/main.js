const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type": "application/json"});
	res.write(JSON.stringify({"api_version": "1.0.0"}));
	res.end();
}).listen(3001, () => console.log(`API server listening on: *:3001`));
