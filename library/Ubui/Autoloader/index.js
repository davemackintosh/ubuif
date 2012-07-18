function Ubui_Autoloader (lib) {
	
	var
		//Require the glob module
		glob = require('glob').Glob,
		//We'll need some path functions
		path = require('path'),
		//Includes the library
		lib = lib ? path.normalize(lib) : 'library/Ubui/*',
		//Options for our glob
		gloptions = {
			nosort: true,
			sync: true
		};

	//Do we already have a library namespace?
	Ubuif.lib = Ubuif.hasOwnProperty('lib') ? Ubuif.lib : {};
		
	//Read the library out
	new glob(lib, gloptions, function (err, results) {
		//Check if an error occured
		if (err) {
			throw Error('\x1b[32mFatal Error:\x1b[0m ' + err);
		}
		
		//Otherwise lets just populate the library object
		results.forEach(function (result) {
			//TODO think of a way to avoid this scenario
			result = result.replace('library/', '');
			Ubuif.lib[path.basename(result)] = require(result);
		});
	});
	
	return Ubuif.Autoloader;
}
Ubuif.Autoloader = Ubui_Autoloader;
module.exports = Ubui_Autoloader;