function Voo () {
	var vm = require('vm');
	
	this.render = function (content, context) {
		return vm.runInNewContext(this.compile(content), context);
	};
	
	this.compile = function (content) {
		var __ = "this.__compiled = '";
		
		content.replace(/\#(.*?)\#/g, "' +$1+ '");
		
		return __ + "';";
	};
};

Ubuif.Ubuivoo = Voo;
module.exports = Voo;