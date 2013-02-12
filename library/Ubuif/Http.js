/**
 * The main handler for http requests and responses
 */
function Http () {
	var
		http = require('http'),
		_server, _request, _response,
		_port = Ubuif.private.config.server.port || 8080;

	/*
	 * This function is simply a wrapper for
	 * our other classes Http_Request and Http_Response
	 */
	_server = http.createServer(function (request, response) {
		//Fire the request and response classes
		_request = new (require('Ubuif/Http_Request'))(request);
		_response = new (require('Ubuif/Http_Response'))(response);

		_request.resolveController();
	});
	
	// Try catch to ensure things are reported properly.
	try {
		// Listen to the port specified in the config file
		if (_server.listen(_port)) {
			// A welcome message for the user :)
			console.log(Ubuif.ReColour('$greenServer started at :' + _port));
		}
	} catch (e) {
		throw Error(e);
	}

	/**
	 * Gets the current instance of Ubuif.Http_Request
	 *
	 * @returns Ubuif.Http_Request
	 */
	this.getRequest = function () {
		return _request;
	};

	/**
	 * Gets the current instance of Ubuif.Http_Response
	 *
	 * @returns Ubuif.Http_Response
	 */
	this.getResponse = function () {
		return _response;
	};

	/**
	 * Forcefully set the controller name in the request
	 *
	 * @param controller, string name of the controller
	 * @returns Ubuif.Http
	 */
	this.setController = function (controller) {
		Ubuif.Http_Request.forceController = controller;
		return this;
	};

	/**
	 * Forcefully set the action name in the request
	 *
	 * @param action, the string name of the action to switch to
	 * @returns Ubuif.Http
	 */
	this.setAction = function (action) {
		Ubuif.Http_Request.forceAction = action.toString();
		return this;
	};
	
	/**
	 * Get the current instance of Ubuif.Frontend
	 *
	 * @returns Ubuif.Frontend
	 */
	this.getFrontEnd = function () {
		return Ubuif.Frontend();
	};

	return this;
};

Ubuif.Http = Http;
module.exports = Http;