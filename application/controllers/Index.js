function IndexController () {
	
	this.init = function () {
		Ubuif.View.persist = 'I\'m persistent alright..';
	};
	
	this.indexAction = function () {
		Ubuif.View.title = 'UBUIF FRAMEWORK TEST';
		Ubuif.View.userName = 'Dave';
	};
	
	this.testAction = function () {
		
	};
}

module.exports = IndexController;