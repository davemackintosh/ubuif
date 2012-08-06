function Http () {
	var
		http = require('http'),
		_server, _request, _response,
		_port = Ubuif.private.config.server.port;
	
	/*This function is simply a wrapper for
	our other classes Http_Request and Http_Response*/
	_server = http.createServer(function (request, response) {
		//Fire the request and response classes
		_request = new Ubuif.Http_Request(request);
		_response = new Ubuif.Http_Response(response);

		_request.resolveController();
	});
	
	try {
		// Listen to the port specified in the config file
		if (_server.listen(_port)) {
			// A welcome message for the user :)
			console.log(Ubuif.ReColour('$greenServer started at :' + _port));
		}
	} catch (e) {
		throw Error(e);
	}
	
	this.getRequest = function () {
		return _request;
	};
	
	this.getResponse = function () {
		return _response;
	};
	
	this.setController = function (controller) {
		Ubuif.Http_Request().forceController = controller.toString();
		return this;
	};
	
	this.setAction = function (action) {
		Ubuif.Http_Request().forceAction = action.toString();
		return this;
	};
	
	return this;
};

Ubuif.Http = Http;
module.exports = Http;