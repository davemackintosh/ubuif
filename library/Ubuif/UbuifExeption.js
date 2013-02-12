/**
 * Generic exception handling class
 * Changes response header to 500 and
 * writes the call stack to the web page like
 * any other server side language.
 *
 * Will also log to the console the error.
 *
 * @param message, instance of Error, TypeError or other error
 */
function UbuifException (message) {
	var _response = Ubuif.Http.getResponse().getRawResponse();

	_response.writeHead(500, {
		"Content-Type": "text/html"
	});
	
	_response.write('<h1>ERROR</h1>');

	_response.end('<pre>' + message.stack + '</pre>');
	
	console.log(message.stack);
};

Ubuif.Exception = UbuifException;
module.exports = Ubuif.Exception;