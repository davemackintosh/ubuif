function UbuifException (message) {
	var _response = Ubuif.Http_Response.getRawResponse();
	console.log(message.getMessage());
	_response.writeHead(500, {
		"Content-Type": "text/plain"
	});
	
	_response.write(message['TypeError']);
	
	_response.end();
	
	return this;
};

Ubuif.Exception = UbuifException;
module.exports = Ubuif.Exception;