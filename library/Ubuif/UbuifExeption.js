function UbuifException (message) {
	var _response = Ubuif.Http.getResponse().getRawResponse();

	_response.writeHead(500, {
		"Content-Type": "text/html"
	});
	
	_response.write('<h1>ERROR</h1>');

	_response.end('<pre>' + message.stack + '</pre>');

	return this;
};

Ubuif.Exception = UbuifException;
module.exports = Ubuif.Exception;