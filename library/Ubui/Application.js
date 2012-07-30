Ubuif.Application = function () {
	
	/**
	 * Returns a boolean as to whether the application
	 * has the specified property
	 */
	this.applicationHasProperty = function (property) {
		return Ubuif.hasOwnProperty(property.toString()); 
	};
	
	/**
	 * Checks whether the named controller is available
	 */
	this.hasController = function (name) {
		//So we can check it's requirable
		var path = require('path');
		//Convert it to a string
		name = name.toString();
		//Check it resolves to a file
		return path.exists('Ubuif/../../application/controllers/' + name);
	};
	
	/**
	 * Helpful function for getting a simple boolean
	 * on whether a variable exists or whether an 
	 * object has the property
	 */
	this.isOK = function (test_me, object) {
		//This much is easy..
		if (test_me === undefined && object === undefined) {
			return false;
		}
		
		//Check for the object to see if we're
		//checking an object property exists
		if (object) {
			return object.hasOwnProperty(test_me);
		} else {
			return test_me ? true : false;
		}
	};
	
	/**
	 * Returns the current instance of the named object
	 * If there is not an instance of said object open
	 * this will return null or undefined.
	 */
	this.getResource = function (resource) {
		resource = resource.toString();
		
		switch (resource) {
			case 'controller':
				return Ubuif.Http_Response.controller;
			break;
			case 'frontend':
				return ;//TBD
			break;
			case 'bootstrap':
				return Ubuif.Bootstrap;
			break;
			case 'autoloader':
				return Ubuif.Autoloader;
			break;
			case 'request':
				return Ubuif.Http_Request;
			break;
			
			default:
				return undefined;
			break;
		}
	};
	
	/**
	 * Must be a better way to do this, but for now
	 * I can only think of this.
	 */
	this.Bootstrap = function () {
		var methods;
		
		for (methods in Ubuif.Front.Bootstrap) {
			if (typeof methods === 'Function') {
				switch (methods) {
					case 'preDispatch':
						Ubuif.Http.preDispatch = Ubuif.Front.Bootstrap.preDispatch;
					break;
				}
			} 
		};
	};
	
};

module.exports = Ubuif.Application;