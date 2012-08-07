function IndexController () {
	
	this.init = function () {};
	
	this.indexAction = function () {
		Ubuif.View.title = 'UBUIF FRAMEWORK TEST';
		Ubuif.View.name = 'Dave';
	};
	
	return this;
}

module.exports = IndexController;