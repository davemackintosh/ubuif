function Ubui_BootStrap () {
	console.log('Ubui_Bootstrap booting');
	
	return Ubuif.Bootstrap;
};

Ubui_BootStrap.prototype.run = function () {
	console.log('bootstrap running');
}

Ubuif.Bootstrap = Ubui_BootStrap;
module.exports.Bootstrap = Ubui_BootStrap;