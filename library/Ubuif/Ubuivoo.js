function Voo () {

	this.compile = function (content) {
		var __ = "this.__compiled = '";

		__ += content.replace(/\#(.*?)\#/g, "' + $1 + '");

		return __ + "';";
	};
	
	this.render = function (content, context) {
		var vm = require('vm'),
			contents = '';

		content = this.compile(content);

		vm.runInNewContext(content, context);

		return contents;
	};
};

Ubuif.Ubuivoo = Voo;
module.exports = Voo;