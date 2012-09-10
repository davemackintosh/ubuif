function IndexController () {
	
	this.init = function () {
		Ubuif.View.persist = 'I\'m persistent alright..';
	};
	
	this.indexAction = function () {
		Ubuif.View.title = 'UBUIF FRAMEWORK TEST';
		Ubuif.View.userName = 'Dave';
	};
	
	this.testAction = function () {
		this.getFrontEnd().setLayout('test.html');
		Ubuif.View.welcome = 'Joe Blogs';
		Ubuif.View.message = 'It\'s a Madhouse.';
	};
}

module.exports = IndexController;