function UbuifDebug () {
	
	this.dump = function (inspect) {
		var dump = '',
			titleClass = '',
			title = '',
			body = '',
			debug,
			key;
			
		console.log(inspect);
		
		switch (typeof inspect) {
			case 'string':
			case 'number':
				titleClass = title = 'String';
				body = '<li>' + inspect + '</li>';
			break;
			case 'function':
				titleClass = 'Function';
				title = 'instance of ' + inspect.name;
				debug = inspect();
				body = '<li>Function called, returned <strong>' +
						typeof debug + '</strong> and was ' + debug + '</li>';
			break;
			default:
				titleClass = 'Iterable';
				title = 'Iterable object';
				for (key in inspect) {
					body += '<li><span>' + key + '</span> - ' + inspect[key] + '</li>';
				};
			break;
		}
		
		// Construct the output
		dump += '<h5 class="Ubuif_Debug ' + titleClass + '">' + title + '</h5>';
		dump += '<ul class="Ubuif_Debug Repeat">' + body + '</ul>';
		
		return dump;
	};
	
	return this;
};

Ubuif.Debug = new UbuifDebug();
module.exports = Ubuif.Debug;