function Voo () {
	var vm = require('vm');

	this.render = function (content, context) {
		content = this.compile(content);

		return vm.runInNewContext(content, context);
	};

	this.compile = function (content) {
		var __ = "this.__compiled = '";

		__ += content.replace(/\#(.*?)\#/g, "' +$1+ '");

		return __ + "';";
	};
};

Ubuif.Ubuivoo = Voo;
module.exports = Voo;