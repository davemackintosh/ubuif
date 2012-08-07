Ubuif.Autoloader = function (lib) {
	
	var
		//Require the glob module
		glob = require('glob').Glob,
		//We'll need some path functions
		path = require('path'),
		//Includes the library
		lib = lib ? path.normalize(lib) : 'library/Ubuif/*',
		//Options for our glob
		gloptions = {
			nosort: true,
			sync: true
		};

	//Read the library out
	new glob(lib, gloptions, function (err, results) {
		//Check if an error occured
		if (err) {
			throw Error('\x1b[32mFatal Error:\x1b[0m ' + err);
		}
		
		//Otherwise lets just include our library
		results.forEach(function (result) {
			result = result.replace('library/', '');
			require(result);
		});
	});
	
	return this;
}

module.exports = Ubuif.Autoloader;