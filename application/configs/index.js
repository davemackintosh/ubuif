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