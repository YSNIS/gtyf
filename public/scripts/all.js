var app = angular.module("app", ['ngRoute'], function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
	);
	//check browser support
    if(window.history && window.history.pushState){
		//$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

		// to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

		// if you don't wish to set base URL then use this
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
    }
}]);
app.controller("MainController", function($scope){
	$scope.hi = 'hello';
	$scope.bye = 'bye';
});
//# sourceMappingURL=all.js.map