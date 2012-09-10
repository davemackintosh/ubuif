/**
 * The default Ubuif html rendering engine
 *
 * @package Ubuif
 * @since 0.0.1
 */
function Voo () {
	
	/**
	 * This function renders the input string into a
	 * format that won't cause Node VM to throw a fit.
	 *
	 * @param content - String, usually contents of a html file
	 * @returns string
	 */
	this.compile = function (content) {
		var __ = "this.__compiled = '";
		__ += content.replace(/\#(.*?)\#/g, "' + $1 + '");
		// Pesky new line characters
		__ = __.replace(/\n+/g, '');
		return __ + "';";
	};
	
	/**
	 * Renders the compiled string into a fully concatenated
	 * string ready to presentation to the client including all
	 * dynamic variables and soon loops/objects.
	 *
	 * @param content, the compiled string
	 * @param context, the data object to pass to the template
	 * @returns string
	 */
	this.render = function (content, context) {
		var vm = require('vm');
		return vm.runInNewContext(this.compile(content), context);
	};
};

Ubuif.Ubuivoo = Voo;
module.exports = Voo;