Ubuif.Colour = function () {
	
	this.prefix = "\x1b[";
	this.colours = {
		"red": '31m',
		"green": '32m',
		"blue": '34m',
		"yellow": "33m",
		"purple": "35m",
		"aqua": "36m",
		"clear": '0m'
	};
	
	this.addColour = function (name, value) {
		if (!name || !value) {
			throw TypeError('Not enough arguments to Ubuif.Colour');
		} else {
			this.colours[name] = value;
		}
	};
	
	
	this.run = function (string) {
		var colour;
		
		for (colour in this.colours) {
			string = string.replace('$' + colour, this.prefix + this.colours[colour]);
		}
		
		return string + this.prefix + this.colours.clear;
	};
}

Ubuif.ReColour = function (string) {
	var Colour = new Ubuif.Colour;
	return Colour.run(string);
}

module.exports = Ubuif.Colour;