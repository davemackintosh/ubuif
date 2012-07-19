/**
 * This doesn't necessarily need to be a function,
 * its just nice to have environments picked up from
 * the node environment variable or defaults to production.
 *
 * See Ubui/Configuration && Ubui/Configuration/Config
 */
function UbuiConfig () {
	
	var
		config = [],
		resources = [];
	
	config['development'] = {
		"db": {
			"adapter": "ubui_mysql",
			"server": "localhost",
			"username": "root",
			"password": "",
			"database": "ubui_production"
		}
	};
	
	config['testing'] = {};
	
	config['staging'] = {};
	
	config['production'] = {};
	
	resources.layout.enabled = true;
};

module.exports = UbuiConfig;