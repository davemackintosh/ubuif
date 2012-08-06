function Http_Request (request) {
	
	var
		_server = request.headers.host,
		_request_uri = request.url,
		path = require('path');
		
	// These are set by setController/Action
	this.forceController = false;
	this.forceAction	   = false;
	
	this.getUrlParts = function () {
		return _request_uri.split('/').slice(1);
	};
	
	this.isPost = function () {
		return (request.method === 'POST');
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
				Ubuif.Http.getResponse().FourOhFour();
			}
		});
		return this;
	};
}

Ubuif.Http_Request = Http_Request;
module.exports = Http_Request;