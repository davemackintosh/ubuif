/**
 * The request class as instantiated by http.createServer
 * INCOMPLETE;
 * TODO:
 *	make this useful
 *	streamline and separate request/response
 */
function Http_Request (request) {
	/**
	 * The server name, don't remember why I wanted this
	 * I'll probably get rid of it.
	 * @param string
	 */
	var _server = request.headers.host;
	/**
	 * Similar story with this, should be inside a function
	 * not a class private.
	 * @param string
	 */
	var _request = request;

	// These are set by setController/Action methods
	this.forceController = false;
	this.forceAction = false;

	/**
	 * Splits the requested url and returns an array
	 * @return array
	 */
	this.getUrlParts = function () {
		var _request_uri = _request.url;
		return _request_uri.split('/').slice(1);
	};
	
	this.isPost = function () {
		return (_request.method === 'POST');
	};
	
	this.getPost = function (key) {
		return this;
	};
	
	this.getControllerName = function () {
		if (this.getUrlParts()[0]) {
			return this.getUrlParts()[0];
		} else {
			return 'index';
		}
	};
	
	this.getActionName = function () {
		if (this.getUrlParts()[1]) {
			return this.getUrlParts()[1];
		} else {
			return 'index';
		}
	};
	
	this.fixName = function (string) {
		return string.charAt(0).toUpperCase() +
			string.substr(1, string.length);
	};
	
	//Load the controller that we want
	this.resolveController = function () {
		var
			controller = this.fixName(this.getControllerName()),
			action = this.getActionName(),
			requirePath = 'Ubuif/../../application/controllers/' + controller + '.js',
			response = Ubuif.Http.getResponse();
		
		// This is in case we've used setController	
		if (this.forceController !== false) {
			requirePath = 'Ubuif/../../application/controllers/' +
				this.forceController + '.js';
		}
		
		// This is in case we've used setAction
		if (this.forceController !== false) {
			action = this.forceAction;
		}

		// Check its require-able and deliver the response
		Ubuif.FileSystem.isRequirable(requirePath, function (is) {
			if (is === true) {
				response.deliver(requirePath, action);
			} else {
				throw new Ubuif.Exception('Controller cannot be found');
			}
		});
		return this;
	};
}

Ubuif.Http_Request = Http_Request;
module.exports = Http_Request;