/**
 * Loads the configuration ready to be
 * used in the Config wrapper.
 */
Ubuif.Configuration = function (Config_Location) {
	var path = require('path');

	//Some constants
	this.CONFIG_LOCATION_EXCEPTION = 'Could not find the config specified';

	//Check our path is real before trying to load it
	if (!path.resolve(Config_Location)) {
		throw Error(this.CONFIG_LOCATION_EXCEPTION);
		return false;
	}

	//Load the config file up
	this.config = require(Config_Location)(Ubuif.ENV);

	//Open the Config subclass
	require('./Config');

	//Return a new Config instance
	return new Ubuif.Config(this.config);
};