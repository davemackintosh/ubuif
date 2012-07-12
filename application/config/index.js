function UbuiConfig () {
	
	var config = [];
	
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
};

module.exports = UbuiConfig;