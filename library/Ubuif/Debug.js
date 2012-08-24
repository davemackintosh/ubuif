function UbuifDebug () {
	
	this.dump = function () {
		return console.log(arguments);
	};
	
	return this;
};

Ubuif.Debug = new UbuifDebug();
module.exports = Ubuif.Debug;