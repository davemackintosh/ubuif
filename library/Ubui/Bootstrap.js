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
		this.setEnv(Ubuif.argv[0].toString());
		
		//Load the configuration
		Ubuif.private.config = new Ubuif.Configuration(Config_Location);
		console.log(Ubuif.private.config);
		return this;
	};
	
	this.setEnv = function (env) {
		Ubuif.ENV = env.toString();
		return this;
	};
	
	this.getEnv = function () {
		return Ubuif.ENV;
	};
	
	return this;
};

module.exports = Ubuif.Bootstrap;