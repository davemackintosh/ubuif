function MustacheAdapter () {
	
	var _core = require('mustache');
	console.log('rendering to html');
	// Literally just an interface to the actual
	// module we have installed on the framework
	this.render = _core.to_html;
	
	return this;
};

module.exports = new MustacheAdapter();