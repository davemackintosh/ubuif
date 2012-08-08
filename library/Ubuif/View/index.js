function View () {

	// Our default rendering engine is Mustache.
	var engine = Ubuif.private.config.front.engine || 
		'mustache';

	// We need a common API for our rendering engines so 
	// lets grab the adapter
	this.adapter = require('./' + engine + 'Adapter.js');
	
	this.renderView = function (content, data) {
		var data = {
			"this": data
		};
		
		Ubuif.View.Body = this.adapter.render(content, data);
		
		return this;
	}

	this.renderLayout = function (content, data) {
		var data = {
			"this": data,
			"Ubuif": {
				"Body": Ubuif.View.Body
			}
		};
		
		Ubuif.View.Layout = this.adapter.render(content, data);
		
		return this;
	};
	
	return this;
};

Ubuif.View = View;
module.exports = View;