/****************************************************

* Project Name: FastSQL
* Purpose: Single Page application to control MySQL
* Author: Zach Alam, Etaware LLC
* License: The MIT License (MIT)  -  http://opensource.org/licenses/MIT

****************************************************/

// setup fastsql as angular app "module"
var fastsql = angular.module("fastsql", []);

// set routeProvider rules in .config()
fastsql.config(function($routeProvider) {
	
	// set what views are displayed for each change in the URL.
	$routeProvider
	.when("/", { controller: 'loginCtrl', templateUrl: 'views/login.html' })
	.when("/db", { controller: 'dbCtrl', templateUrl: 'views/db.html' })
	.when("/explore/", { controller: 'exploreCtrl', templateUrl: 'views/explore.html' })
	.otherwise({ redirectTo: '/' });
	
});

// controllers

fastsql.controller("loginCtrl", function($scope, $http, $location) {

	// asks user for MySQL login info

	// set default "localhost" to server.
	$scope.login = { serv: "localhost" };
	
	// login submit
	$scope.loginSubmit = function() {
		
		// load tables if user/
		
		// check to see if mysql connection is good - and were stored in session variables.
		$http.post('comm/mysql_connect.php',$scope.login)
		.success(function(data) {

		// if session set successfully, send user to select database
		if(data.error) alert(data.error);
		else $location.path("/db");
			
		});
	};

});


//////////////////////////////////////////////////////////////////////////////////////////////

fastsql.controller("dbCtrl", function($scope, $location, $http) {

	// asks user to select a database
	// get database list
	$http.post('comm/mysql_show_databases.php')
	.success(function(data) {
		$scope.databases = data;
	});
	
	$scope.chooseDb = function(db_name) {
	
		
		// saves the chosen db as session
		$http.post('comm/mysql_save_database.php', {db: db_name})
		.success(function(data) {
	
		// if session set successfully, send user to home
		if(data.error) alert(data.error);
		else $location.path("/explore");
		
		});

	}
	
});





//////////////////////////////////////////////////////////////////////////////////////////////

fastsql.controller("exploreCtrl", function($scope, $http, $location) {

	// get current database name
	$http.post('comm/mysql_database_name.php')
	.success(function(data) {

	// if a database isnt set, send the user to choose one - otherwise let's start displaying info
	if(data.db) $scope.db = data.db;
	else $location.path("/db");
	
	});	
});

