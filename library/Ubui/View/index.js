Ubuif.View = function () {

	this.DEFAULT_LAYOUT   = 'Ubuif/../application/layouts/';
	this.DEFAULT_VIEWS    = 'Ubuif/../application/views/';
	this.DEFAULT_PARTIALS = 'Ubuif/../application/partials/';
	
	this.path = require('path');
	
	/*
	 * Need to think about how to get
	 * html, jade, mustache, etc here
	 */
	
	this.resolve = function (resolve) {
		if (path.resolve(resolve)) {
			
		}
	};
	
	this.getLayout = function () {
		
	};
	
	this.getContent = function () {
		
	};
}