//10/17/22 code to create a local server on your machine


const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res){
	res.writeHead(200);
	res.end("Server has been accessed.");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log('Server is running on http://${host}:${port}');
});
