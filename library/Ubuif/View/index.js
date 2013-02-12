function View () {

	// Our default rendering engine is Ubuivoo.
	var engine = Ubuif.private.config.front.engine || 
		'ubuivoo';

	// We need a common API for our rendering engines so 
	// lets grab the adapter
	this.adapter = require('./' + engine + 'Adapter.js');
	
	this.renderView = function (content) {
		var data = {
			"view": Ubuif.View,
			"Ubuif": Ubuif
		};
		Ubuif.View.Body = this.adapter.render(content, data);

		return this;
	}

	this.renderLayout = function (content) {
		var data = {
			"view": Ubuif.View,
			"Ubuif": Ubuif,
			"Body": Ubuif.View.Body
		};
		Ubuif.View.Layout = this.adapter.render(content, data);
		
		// This includes our compiled view & Layout
		return Ubuif.View.Layout;
	};
	
	return this;
};

Ubuif.View = View;
module.exports = View;