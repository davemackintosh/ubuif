Ubuif.Config = function (conf) {
	/*
	 * This class is just a wrapper, see Ubui/Configuration
	 * for the class that loads the configuration
	 */
	if (!conf || !(typeof conf === 'object')) {
		throw TypeError('The configuration passed is the incorrect format');
	}
	
	/*
	 * Loop over the configuration and
	 * create the config object out of
	 * this class.
	 */
	
	
	this.propertyObjectLoop = function (property) {
		var prop;
		
		for (prop in property) {
			if (typeof property[prop] === 'object') {
				this[prop] = this.propertyObjectLoop(property[prop]);
			} else {
				this[prop] = property[prop];
			}
		}
	};
	 
	return this;
};

module.exports = Ubuif.Config;