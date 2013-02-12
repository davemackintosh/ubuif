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
	
	/**
	 * Checks the method of the request and returns 
	 * a boolean as to whether it was a post request.
	 * @return boolean
	 */
	this.isPost = function () {
		return (_request.method === 'POST');
	};
	
	/**
	 * Will fetch a key or the whole array of posted
	 * variables and values in the request.
	 *
	 * @param key, string: key of the post
	 * @return string|object
	 */
	this.getPost = function (key) {
		return this;
	};
	
	/**
	 * Get's requests controller part and returns string
	 * @return string
	 */
	this.getControllerName = function () {
		if (this.getUrlParts()[0]) {
			return this.getUrlParts()[0];
		} else {
			return 'index';
		}
	};
	
	/**
	 * Gets the requests action part and returns string
	 * @@return string
	 */
	this.getActionName = function () {
		if (this.getUrlParts()[1]) {
			return this.getUrlParts()[1];
		} else {
			return 'index';
		}
	};
	
	/**
	 * Takes the name of a controller and formats it 
	 * ready to use as a call to the requested controller
	 *
	 * @param string, name to format
	 * @return string
	 */
	this.fixName = function (string) {
		return string.charAt(0).toUpperCase() +
			string.substr(1, string.length);
	};
	
	/**
	 * Loads and initialises the controllers, loads and parses
	 * the views while checking that they are readable files.
	 * @return Ubuif.Http_Request
	 */
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
		if (this.forceAction !== false) {
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