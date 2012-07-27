function Index () {
	
	this.init = function () {};
	
	this.indexAction = function () {
		console.log(this);
	};
	
	return this;
}

module.exports = Index;