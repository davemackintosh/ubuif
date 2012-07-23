function Http_Response (response) {

	var _response = response;
	
	this.404 = function () {
		_response.writeHead(404);
		
		_response.close();
	};
	
	this.setHeader = function (header, options) {
		_response.writeHead(header, options);
		
	};
}

Ubuif.Http_Response = Http_Response;
module.exports = Http_Response;