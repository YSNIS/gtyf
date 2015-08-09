var app = angular.module("app", ['ngRoute'], function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});
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
app.controller("MainController", function($scope){
	$scope.hi = 'hello';
	$scope.bye = 'bye';
});
//# sourceMappingURL=all.js.map