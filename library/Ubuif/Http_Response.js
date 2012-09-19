/**
 * The http response class, handles delivery 
 * of content to the front end.
 * 
 * @param reponse, http server response object
 * @returns Ubuif.Http_Response
 */
function Http_Response (response) {

	/**
	 * The response argument from http.createServer
	 * @param object
	 */
	var _response = response;
	
	/**
	 * The string name of the requested controller
	 * @param string
	 */
	var _controller;
	
	/**
	 * The string name of the requested action
	 * @param string
	 */
	var _action;

	/**
	 * Rudimentary function for setting the header
	 * and content type for a response.
	 *
	 * @param header - Number, a valid http status code
	 * @param type - String, a valid Content-Type value
	 * return Ubuif.Http_Response
	 */
	this.header = function (header, type) {
		header = header || 200;
		type = type || 'text/html';

		_response.writeHead(header, {
			"Content-Type": type
		});

		return this;
	};

	/**
	 * Just returns the raw response object from Nodes
	 * http server callback. Will not wait for request 
	 * to finish before returning.
	 *
	 * @return response object
	 */
	this.getRawResponse = function () {
		return _response;
	};

	/**
	 * Renders the outgoing content and delivers it to
	 * the front end as the response body. Instantiates 
	 * the requested controller and fires the requested 
	 * action as well.
	 *
	 * @param controller, the requested controller name
	 * @param action, the requested action name
	 * @return void
	 */
	this.deliver = function (controller, action) {
		var viewScript = 'application/views/' + 
				Ubuif.Http.getRequest().getControllerName() + '/' + action + '.html';
		// Open the instance of the requested controller
		// with the scope of Ubuif.Http
		_response.controller = new (require(controller))();
		_response.controller.init.call(Ubuif.Http);
		_response.controller[action + 'Action'].call(Ubuif.Http);
		
		// Tell the front end to render the view first
		Ubuif.FileSystem.getFileContents(viewScript, function (conts) {
			// Render the view
			Ubuif.View().renderView(conts, Ubuif.View);
		
			// Then we want to render the layout
			Ubuif.FileSystem.getFileContents(Ubuif.Frontend().getLayout(), function (conts) {
				_response.writeHead(200, {
					"Content-Type": 'text/html'
				});

				// End the reponse
				_response.write(Ubuif.View().renderLayout(conts, Ubuif.View).replace(/\#newline\#/gi, "\n"));

				_response.end();
			});
		});
	};
	
	return this;
};

Ubuif.Http_Response = Http_Response();
module.exports = Http_Response;