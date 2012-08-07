function Config (conf) {
	/*
	 * This class is just a wrapper, see Ubui/Configuration
	 * for the class that loads the configuration
	 */
	if (!conf || !(typeof conf === 'object')) {
		throw TypeError('The configuration passed is the incorrect format');
	}
	
	this.propertyObjectLoop = function (property) {
		var prop, returnObj = false;
		
		for (prop in property) {
			if (property.hasOwnProperty(prop)) {
				this[prop] = property[prop];
			}
		}
	};
	
	/*
	 * Loop over the configuration and
	 * create the config object out of
	 * this class.
	 */
	this.propertyObjectLoop(conf);
	 
	return this;
};

module.exports.Config = Config;