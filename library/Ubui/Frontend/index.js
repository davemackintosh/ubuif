function Frontend () {
	
	this.current_layout = 'layout.html';
	
	this.layout = function (changeTo) {
		var path = require('path');
		if (changeTo) {
			if (path.exists(changeTo)) {
				this.current_layout = changeTo;
			} else {
				throw Error('The layout ' + changeTo + ' cannot be found.');
			}
		} else {
			
		}
	};
	
};

module.exports = Frontend;
Ubuif.Frontend = Frontend;