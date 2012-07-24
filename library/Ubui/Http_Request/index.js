function Http_Request (request) {
	
	var
		_server = request.headers.host,
		_request_uri = request.url;
	
	this.getUrlParts = function () {
		return _request_uri.split('/').slice(1);
	};
	
	this.isPost = function () {
		return (request.method === 'POST');
	};
	
	this.getControllerName = function () {
		return this.getUrlParts()[0];
	};
	
	this.getActionName = function () {
		return this.getUrlParts()[1];
	};
	
	//Load the controller that we want
	
}

Ubuif.Http_Request = Http_Request;
module.exports = Http_Request;