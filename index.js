//This is the namespace for the framework
global.Ubuif = {};
/**
 * The Autoloader launches immedietly so core
 * modules are loaded for thee Bootstrap
 */
require('Ubui/Autoloader')();
require('./application/Bootstrap'),
	
console.log(Ubuif.Bootstrap);
console.log(Ubuif.Autoloader);