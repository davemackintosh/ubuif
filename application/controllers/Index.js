function IndexController () {
	
	this.init = function () {
		Ubuif.View.persist = 'I\'m persistent alright..';
	};
	
	this.indexAction = function () {
		this.getFrontEnd().setLayout('layout.html');
		Ubuif.View.title = 'UBUIF FRAMEWORK TEST';
		Ubuif.View.userName = 'Dave';
		Ubuif.View.testObject = {
			"hello": "world",
			"goodbye": "world"
		};
		
		Ubuif.View.testArray = [1,2,3,4,5,6,7,8,9];
		Ubuif.View.multidimensional = [];
		Ubuif.View.multidimensional['array'] = [1,2,3,4,5];
		Ubuif.View.multidimensional['object'] = {
			'hello': 'world',
			'world': 'hello'
		};
	};
	
	this.testAction = function () {
		this.getFrontEnd().setLayout('test.html');
		Ubuif.View.welcome = 'Joe Blogs';
		Ubuif.View.message = 'It\'s a Madhouse.';
	};
}

module.exports = IndexController;