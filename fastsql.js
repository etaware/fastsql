/****************************************************

* Project Name: fastsql.js
* Purpose: To make routine modifications to databases under the control of MySQL.
* Author: Zach Alam, Etaware LLC
* License: The MIT License (MIT)  -  http://opensource.org/licenses/MIT

****************************************************/

// setup fastsql as angular app "module"
var fastsql = angular.module("fastsql", []);

// set routeProvider rules in .config()
fastsql.config(function($routeProvider) {
	
	// set what views are displayed for each change in the URL.
	$routeProvider
	.when("/", { controller: 'loginCntl', templateUrl: 'test.html' })
	.otherwise({ redirectTo: '/' });
	
});

// controllers

fastsql.controller("loginCntl", function($scope) {

	$scope.message = "hey";

});



