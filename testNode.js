var http = require("http");
http.createServer(function(request, response){
	
	//send the HTTP header
	//HTTP Status: 200 : OK
	//Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World NZBOZ on Web');

}).listen(8081);
console.log("hello world NZBOZ");
