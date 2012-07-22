Ubuif.Bootstrap = function () {

	//Somewhere to dump information
	Ubuif.logs = [];
	
	//Private, read-only storage
	Ubuif.private = {};
	
	//We want the cli arguments used to start the instance
	Ubuif.argv = process.argv.slice(2);
	
	this.run = function (Config_Location) {
		//Default the environment to production
		if (Ubuif.argv.length === 0) {
			Ubuif.argv = ['production'];
		}
		//Set the environment
		this.setEnv(Ubuif.argv[0]);
		
		//Load the configuration
		Ubuif.private.config = new Ubuif.Configuration(Config_Location);
		
		//Start the http server
		Ubuif.Http = new Ubuif.Http();

		return this;
	};
	
	this.setEnv = function (env) {
		Ubuif.ENV = env.toString();
		return this;
	};
	
	this.getEnv = function () {
		return Ubuif.ENV;
	};
	
	//Add some methods to get helpful elements
	//Such as cli arguments, process variables
	Ubuif.getCliArg = function (index) {
		return Ubuif.argv[index] ? Ubuif.argv[index] : null;
	};
	
	return this;
};

module.exports = Ubuif.Bootstrap;