/**
 * This doesn't necessarily need to be a named function,
 * it just needs to be a function so that it can be called.
 *
 * See Ubui/Configuration && Ubui/Configuration/Config
 */
function UbuiConfig (environment) {
	
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
		},
		"server": {
			"port": 8080,
			"404": {
				"controller": "error",
				"action": "404"
			}
		}
	};
	
	config['testing'] = {
		"db": {
			"adapter": "ubui_mysql",
			"server": "localhost",
			"username": "root",
			"password": "",
			"database": "ubui_production"
		},
		"server": {
			"port": 8080
		}
	};
	
	config['staging'] = {
		"db": {
			"adapter": "ubui_mysql",
			"server": "localhost",
			"username": "root",
			"password": "",
			"database": "ubui_production"
		},
		"server": {
			"port": 8080
		}
	};
	
	config['production'] = {
		"db": {
			"adapter": "ubui_mysql",
			"server": "localhost",
			"username": "root",
			"password": "",
			"database": "ubui_production"
		},
		"server": {
			"port": 8080
		}
	};
	
	//Return the environment that we wanted
	return config[environment];
};

module.exports = UbuiConfig;