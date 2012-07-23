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
	
	this.getController = function () {
		return this.getUrlParts()[0];
	};
	
	this.getAction = function () {
		return this.getUrlParts()[1];
	};
	
	console.log(this.getUrlParts());
}

Ubuif.Http_Request = Http_Request;
module.exports = Http_Request;