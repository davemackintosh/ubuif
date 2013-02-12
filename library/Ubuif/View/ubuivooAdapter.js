function UbuivooAdapter () {
	
	var _core = new Ubuif.Ubuivoo();
	// Literally just an interface to the actual
	// module we have installed on the framework
	this.render = _core.render;
	this.compileLoops = _core.compileLoops;
	this.setViewVariables = _core.setViewVariables;
	this.compile = _core.compile;
	
	return this;
};

module.exports = new UbuivooAdapter();