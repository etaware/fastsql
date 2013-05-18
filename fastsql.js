/****************************************************

* Project Name: FastSQL
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
	.when("/", { controller: 'loginCntl', templateUrl: 'views/login.html' })
	.when("/home", { controller: 'loginCntl', templateUrl: 'test.html' })
	.otherwise({ redirectTo: '/' });
	
});

// controllers

fastsql.controller("loginCntl", function($scope, $http, $location) {

	
	// login submit
	$scope.loginSubmit = function() {
		
		// check to see if mysql connection is good - and were stored in session variables.
		$http.post('comm/mysql_connect.php',$scope.login)
		.success(function(data) {

						
		if(data.error) 
		{
			// error
			alert(data.error);
		}
		else
		{
			// great, we're ready to use mysql
			$location.path("/home");
		}
			
		});
	};

});



