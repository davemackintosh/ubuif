function Http_Response (response) {

	var
		_response = response,
		_controller,
		_action,
		_content;

	this.header = function (header, type) {
		header = Number(header) || 200;
		type = type.toString() || 'text/plain';

		_response.writeHead(header, {
			"Content-Type": type
		});

		return this;
	};
	
	this.getRawResponse = function () {
		return _response;
	};

	this.FourOhFour = function () {
		_response.writeHead(404, {
			"Content-Type": "text/html"
		});
		_response.write("404 Not Found\n");
		_response.end();
	};
	
	this.deliver = function (controller, action) {
		var viewScript = 'application/views/' + 
				Ubuif.Http.getRequest().getControllerName() + '/' + action + '.html';
		// Open the instance of the requested controller
		// with the scope of Ubuif.Http
		_response.controller = new (require(controller))();
		_response.controller[action + 'Action'].call(Ubuif.Http);
		
		// Tell the front end to render the view first
		Ubuif.FileSystem.getFileContents(viewScript, function (conts) {
			Ubuif.View().renderView(conts, Ubuif.View);
		});
		
		// Then we want to render the layout
		// TODO get layout in here properly
		Ubuif.FileSystem.getFileContents('application/layouts/layout.html', function (conts) {
console.log(conts);
			// End the reponse
			_response.write(Ubuif.View().renderLayout(conts, Ubuif.View));
			
			_response.end();
		});
	};
	
	return this;
};

Ubuif.Http_Response = Http_Response();
module.exports = Http_Response;