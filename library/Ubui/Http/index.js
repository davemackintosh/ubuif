function Http () {
	var
		http = require('http'),
		_server, _request, _response;
	
	/*This function is simply a wrapper for
	our other classes Http_Request and Http_Response*/
	_server = http.createServer(function (request, response) {
		//Fire the request and response classes
		_request = new Ubuif.Http_Request(request);
		_response = new Ubuif.Http_Response(response);
	});
	
	//Listen to the port specified in the config file
	_server.listen(Ubuif.private.config.server.port);
	
	//Methods for getting request information
	this.getRequest = function () {
		return _request;
	};
	
	this.getResponse = function () {
		return _response;
	};
	
	return this;
};

Ubuif.Http = Http;
module.exports = Http;