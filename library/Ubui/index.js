//This is the namespace for the framework
global.Ubuif = {};

/**
 * The Autoloader launches immedietly so core
 * modules are loaded for the Bootstrap
 */
require('Ubui/Autoloader');
new Ubuif.Autoloader();

/**
 * We should have all our modules now
 * and its safe to assume running the
 * bootstrap will work OK.
 */
Ubuif.Bootstrap().run('Ubui/../../application/configs');