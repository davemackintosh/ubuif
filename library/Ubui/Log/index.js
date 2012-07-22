function Log (string) {
	var
		_fs = require('fs'),
		_LOG_LOCATION = '/tmp/ubuif/log.txt';
	
	this.setLogLocation = function (location) {
		_LOG_LOCATION = location.toString();
		return this;
	};
	
	this.write = function () {
		_fs.writeFile(_LOG_LOCATION, string, function (err) {
			if (err) {
				console.log(err);
			}
		});
	}
	
	return this;
};

Ubuif.Log = Log;
module.exports = Log;