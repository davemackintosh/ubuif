function Frontend () {

	// The directory where we keep out layouts
	this.LAYOUT_DIR = Ubuif.private.config.front.layouts ||
		'Ubuif/../../application/layouts/';
		
	// The directory where we keep our views
	this.VIEWS_DIR = Ubuif.private.config.front.views ||
		'Ubuif/../../application/views/';
		
	// Yep, the directory we keep the erm.. parti...
	this.PARTIALS_DIR = Ubuif.private.config.front.partials || 
		'Ubuif/../../application/partials/';
	
	// The current layout selected
	this.layout = this.LAYOUT_DIR + 'layout.html';
	
	this.setLayout = function (changeTo) {
		Ubuif.FileSystem.isFile(this.LAYOUT_DIR + changeTo, function (is) {
			if (is === true) {
				this.layout = this.LAYOUT_DIR + changeTo;
			} else {
				throw Error('The file "' + changeTo + '" does not exist in the location specified');
			}
		});
		
		return this;
	};
	
	this.getLayout = function () {
		return this.LAYOUT_DIR + this.layout
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
	
	return this;
};

Ubuif.Frontend = new Frontend;
module.exports = Ubuif.Frontend;