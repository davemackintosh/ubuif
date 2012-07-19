Ubuif.Config = function (conf) {
	/*
	 * This class is just a wrapper, see Ubui/Configuration
	 * for the class that loads the configuration
	 */
	if (!conf || !(typeof conf === 'Object')) {
		throw TypeError('The configuration passed is the incorrect format');
	}
	
	/*
	 * Loop over the configuration and
	 * create the config object out of
	 * this class.
	 */
	 
	 
	return this(conf);
};

module.exports = Ubuif.Config;