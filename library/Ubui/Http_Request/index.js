function Http_Request (request) {
	
	var
		_server = request.headers.host,
		_request_uri = request.url,
		path = require('path');
	
	this.getUrlParts = function () {
		return _request_uri.split('/').slice(1);
	};
	
	this.isPost = function () {
		return (request.method === 'POST');
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
	
	//Load the controller that we want
	this.resolveController = function () {
		var
			controller = this.getControllerName(),
			requirePath = 'Ubuif/../../application/controllers/' + controller;

		if (path.resolve(requirePath)) {
			Ubuif.Http.getResponse().controller = new (require(requirePath))();
			Ubuif.Http.getResponse().controller['indexAction'].call(this);
			return this;
		} else {
			return Ubuif.Http.getResponse().FourOhFour();
		}
	};
}

Ubuif.Http_Request = Http_Request;
module.exports = Http_Request;