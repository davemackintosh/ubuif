function Http () {
	var
		http = require('http'),
		server = undefined;
	
	/*This function is simply a wrapper for
	our other classes Http_Request and Http_Response*/
	server = http.createServer(function (request, response) {
		//Fire the request and response classes
		new Ubuif.Http_Request(request);
		new Ubuif.Http_Response(response);
	});
	
	//Listen to the port specified in the config file
	server.listen(Ubuif.private.config.server.port);
	
	return this;
};

Ubuif.Http = Http;
module.exports = Http;