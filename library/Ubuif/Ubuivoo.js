/**
 * The default Ubuif html rendering engine
 *
 * @package Ubuif
 * @since 0.0.1
 */
function Voo () {

	this.compiled = "this.__compiled = '";

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
		__ = __.replace(/\n+/g, '#newline#');
		return __ + "';";
	};

	/**
	 * Scans the content for the loop syntax "##objectName# content #object##"
	 */
	this.compileLoops = function (content, context) {
		content = content.replace(/\#{2}(.*?)\#/g, "'; for (var key in $1) { this.__compiled += '");
		content = content.replace(/\#(.*?)\#{2}/g, "'; }; this.__compiled += '");
		return content;
	};
	
	/**
	 * Sets variables in the view
	 */
	this.setViewVariables = function (content) {
		return content.replace(/\#\=(.*?)\#/g, "'; var $1; this.__compiled += '");
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
		// Require the vm module
		var vm = require('vm');
		// Pre-compile the loops
		content = this.compileLoops(content, context);
		// Set any view set variables
		content = this.setViewVariables(content);
		// Return the fully compiled string
		return vm.runInNewContext(this.compile(content), context);
	};
};

Ubuif.Ubuivoo = Voo;
module.exports = Voo;