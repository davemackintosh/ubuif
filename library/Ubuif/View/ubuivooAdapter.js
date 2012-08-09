function UbuivooAdapter () {
	
	var _core = Ubuif.Ubuivoo;
	// Literally just an interface to the actual
	// module we have installed on the framework
	this.render = _core.render;
	
	return this;
};

module.exports = new UbuivooAdapter();