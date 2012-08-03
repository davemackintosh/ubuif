Ubuif.FileSystem = function () {
	
	var fs = require('fs');
	
	this.isRequirable = function (path, callback) {
		path = path.toString();
		
		fs.stat(path, function (error, stats) {
			if (error === null) {
				callback(false);
			} else {
				callback(true);
			}
		});
		
		return this;
	};
	
	this.isFile = function (path, callback) {
		path = path.toString();
		
		fs.stat(path, function (error, stats) {
			if (error === null || !stats.isDirectory()) {
				callback(false);
			} else {
				callback(true);
			}
		});
		
		return this;
	};
	
	this.isDirectory = function (path, callback) {
		path = path.toString();
		
		fs.stat(path, function (error, stats) {
			if (error === null || !stats.isDirectory()) {
				callback(false);
			} else {
				callback(true);
			}
		});
		
		return this;
	};
	
	this.getFileContents = function (file, callback) {
		file = file.toString();
		
		fs.readFile(file, function (error, contents) {
			if (error === null) {
				callback(contents);
			} else {
				throw Error('Couldn\'t open the file "' + file + '"');
			}
		});
		return this;
	};
	
	return this;
};

module.exports = Ubuif.FileSystem;