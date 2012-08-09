//This is the namespace for the framework
global.Ubuif = {};

/**
 * The Autoloader launches immedietly so core
 * modules are loaded for the Bootstrap
 */
require('Ubuif/Autoloader');
new Ubuif.Autoloader();

/**
 * We should have all our modules now
 * and its safe to assume running the
 * bootstrap will work OK.
 */
Ubuif.Bootstrap().run('Ubuif/../../application/configs');

/**
 * Add a sensible listener for errors to handle exceptions better
 */
process.on('uncaughtException', function (err) {
	return new Ubuif.Exception(err);
});