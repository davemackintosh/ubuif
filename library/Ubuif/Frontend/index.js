function Frontend () {
	
	
	// The directory where we keep out layouts
	this.LAYOUT = Ubuif.private.config.front.layouts ||
		'Ubuif/../../application/layouts/';
		
	// The directory where we keep our views
	this.VIEWS = Ubuif.private.config.front.views ||
		'Ubuif/../../application/views/';
		
	// Yep, the directory we keep the erm.. parti...
	this.PARTIALS = Ubuif.private.config.front.partials || 
		'Ubuif/../../application/partials/';
	
	// The current layout selected
	this.current_layout = this.LAYOUT + 'layout.html';
	
	this.setLayout = function (changeTo) {
		Ubuif.FileSystem.isFile(changeTo, function (is) {
			if (is === true) {
				this.current_layout = changeTo;
			} else {
				throw Error('The file "' + changeTo + '" does not exist in the location specified');
			}
		});
		
		return this;
	};
	
	this.render = function (view) {
		// Render the view
		Ubuif.FileSystem.getFileContents(view, function (contents) {
			Ubuif.View.renderView(contents);
		});
		
		// Render the layout
		Ubuif.FileSystem.getFileContents(this.current_layout, function (contents) {
			Ubuif.View.renderLayout(contents);
		});
	};
	
};

module.exports = Frontend;
Ubuif.Frontend = Frontend();