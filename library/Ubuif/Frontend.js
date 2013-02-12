function Frontend () {

	// The directory where we keep out layouts
	this.LAYOUT_DIR = Ubuif.private.config.front.layouts ||
		'application/layouts/';
		
	// The directory where we keep our views
	this.VIEWS_DIR = Ubuif.private.config.front.views ||
		'application/views/';
		
	// Yep, the directory we keep the erm.. parti...
	this.PARTIALS_DIR = Ubuif.private.config.front.partials || 
		'application/partials/';

	this.setLayout = function (changeTo) {
		this.layout = this.LAYOUT_DIR + changeTo;
		return this;
	};
	
	this.getLayout = function () {
		return this.layout ? this.layout : this.LAYOUT_DIR + 'layout.html';
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

Ubuif.Frontend = Frontend;
module.exports = Ubuif.Frontend;