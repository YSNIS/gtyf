var app = angular.module("app", ['ngRoute'], function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when("/",
		{
			templateUrl: "partials/main.blade.php",
			controller: "MainController",
		}
	);
	
	//Removes # from URL
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
app.controller("HeaderController", ['$scope', function($scope){
	$scope.title = "Get Them You Fools";
	$scope.subtitle = "The International Henchmen Database";
}]);
app.controller("MainController", ['$scope', '$http', function($scope, $http) {
	
	$scope.henchmen = {};

	$http.get('/getHenchmen').
		then(function(data){
			$scope.henchmen = data.data;
		}, function(error){
			console.log(error);
		});

}]);
//# sourceMappingURL=all.js.map