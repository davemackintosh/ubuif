function View () {

	// Our default rendering engine is Mustache.
	var engine = Ubuif.private.config.front.engine || 
		'ubuivoo';

	// We need a common API for our rendering engines so 
	// lets grab the adapter
	this.adapter = require('./' + engine + 'Adapter.js');
	
	this.renderView = function (content, data) {
		var data = {
			"view": data
		};

		Ubuif.View.Body = this.adapter.render(content, data);

		return this;
	}

	this.renderLayout = function (content, data) {
		var data = {
			"view": data,
			"Ubuif": {
				"Body": Ubuif.View.Body
			}
		};
		
		Ubuif.View.Layout = this.adapter.render(content, data);
		
		// This includes our compiled view & Layout
		return Ubuif.View.Layout;
	};
	
	return this;
};

Ubuif.View = View;
module.exports = View;