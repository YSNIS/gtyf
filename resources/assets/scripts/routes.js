app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/",
		{
			templateUrl: "partials/test.blade.php",
			controller: "MainController",
		}
	).when ("/henchmen",
		{
			templateUrl: "partials/test2.blade.php",
			controller: "MainController",
		}
	)
	;	
}]);