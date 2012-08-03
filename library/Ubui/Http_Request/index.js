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
	
	this.fixName = function (string) {
		return string.charAt(0).toUpperCase() +
			string.substr(1, string.length);
	};
	
	//Load the controller that we want
	this.resolveController = function () {
		var
			controller = this.fixName(this.getControllerName()),
			action = this.fixName(this.getActionName()),
			requirePath = 'application/controllers/' + controller,
			response = Ubuif.Http.getResponse();

		Ubuif.FileSystem().isRequirable(requirePath, function (is) {
			if (is === true) {
				response.controller = new (require(requirePath))();
				response.controller[action + 'Action'].call(this);
			} else {
				Ubuif.Http.getResponse().FourOhFour();
			}
		});
		return this;
	};
}

Ubuif.Http_Request = Http_Request;
module.exports = Http_Request;