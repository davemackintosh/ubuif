Ubuif.Http = function () {
	var
		http = require('http'),
		server = undefined;
	
	/*This function is simply a wrapper for
	our other classes Http_Request and Http_Response*/
	server = http.createServer(function (request, response) {
		Ubuif.Http_Request = new Http_Request(request);
		Ubuif.Http_Response = new Http_Response(response);
		return Ubuif;
	});
	
	//Listen to the port specified in the config file
	server.listen(Ubuif.private.config.server.port);
}