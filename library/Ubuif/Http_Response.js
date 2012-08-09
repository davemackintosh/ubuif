function Http_Response (response) {

	var
		_response = response,
		_controller,
		_action,
		_body;
		
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
			"Content-Type": "text/plain"
		});
		_response.write("404 Not Found\n");
		_response.end();
	};
	
	this.setHeader = function (header, options) {
		_response.writeHead(header, options);
	};

	this.render = function (view) {
		var vari;
		// Check we have the view file
		Ubuif.FileSystem.isRequirable(view, function (is) {
			if (is) {
				for (vari in Ubuif.View) {
					
				};
			} else {
				throw Error('View script "' + action + '" cannot be found');
			}
		});
		
		return this;
	};
	
	this.deliver = function (controller, action) {
		var viewScript = 'Ubuif/../../application/views/' + 
				controller + '/' + action + '.js';
		// Open the instance of the requested controller
		// with the scope of Ubuif.Http
		_response.controller = new (require(controller))();
		_response.controller[action + 'Action'].call(Ubuif.Http);
		
		// Tell the front end to render the view first
		Ubuif.View().renderView(viewScript, Ubuif.View);
		
		// Then we want to render the layout
		_response.write(Ubuif.View().renderLayout());
		
		// End the reponse
		_response.end();
	};
	
	return this;
};

Ubuif.Http_Response = Http_Response();
module.exports = Http_Response;