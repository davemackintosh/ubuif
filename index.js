//This is the namespace for the framework
global.Ubuif = {};

/**
 * The Autoloader launches immedietly so core
 * modules are loaded for the Bootstrap
 */
require('Ubui/Autoloader')();
require('./application/Bootstrap');

/**
 * We should have all our modules now
 * and its safe to assume running the
 * bootstrap will work OK.
 */
console.log(Ubuif.Bootstrap.run);
//Ubuif.Bootstrap.run.call(Ubuif);