function Voo () {

	this.compile = function (content) {
		var __ = "this.__compiled = '";
		
		__ += content.replace(/\#(.*?)\#/g, "' + $1 + '");
		__ = __.replace(/\s+/g, '');
		return __ + "';";
	};
	
	this.render = function (content, context) {
		var vm = require('vm');
		return vm.runInNewContext(this.compile(content), context);
	};
};

Ubuif.Ubuivoo = Voo;
module.exports = Voo;