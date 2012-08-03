Ubuif.FileSystem = function () {
	
	var fs = require('fs');
	
	this.isRequirable = function (path, callback) {
		this.isFile(path, callback);
		return this;
	};
	
	this.isFile = function (path, callback) {
		path = path.toString();
		
		fs.stat(path, function (error, stats) {
			if (error || !stats.isDirectory()) {
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
			if (error || !stats.isDirectory()) {
				callback(false);
			} else {
				callback(true);
			}
		});
		
		return this;
	};
	
	return this;
};

module.exports = Ubuif.FileSystem;