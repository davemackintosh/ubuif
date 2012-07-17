function Ubui_Autoloader (lib) {
	
	var
		//Require the glob module
		glob = require('glob').Glob,
		//We'll need some path functions
		path = require('path'),
		//Includes the library
		lib = lib ? path.normalize(lib) : 'library/Ubui/*',
		//Where we want our liibrary
		out_lib = {};
		
	//Read the library out
	new glob(lib, function (err, results) {
		//Check if an error occured
		if (err) {
			throw Error('\x1b[32mFatal Error:\x1b[0m ' + err);
		}
		
		//Otherwise lets just populate the library object
		results.forEach(function (result) {
			result = result.replace('library/', '');
			Ubuif.Autoloader[path.basename(result)] = require(result);
		});
		
		return out_lib;
	});
	
	return Ubuif.Autoloader;
}
Ubuif.Autoloader = Ubui_Autoloader;
module.exports = Ubui_Autoloader;