function Http_Response (response) {

	var
		_response = response,
		_controller, _action;
	
	this.getController = function () {
		console.log(this.controller);
	};
	
	this.getAction = function () {
	
	};
	
	this.FourOhFour = function () {
		_response.writeHead(404, {
			"Content-Type": "text/plain"
		});
		_response.write("404 Not Found\n");
		_response.end();
	};
	
	this.setHeader = function (header, options) {
		_response.writeHead(header, options);
	};
}

Ubuif.Http_Response = Http_Response;
module.exports = Http_Response;