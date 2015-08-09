app.controller("MainController", ['$scope', '$http', function($scope, $http) {
	
	$scope.henchmen = {};
	$http.get('/getHenchmen').
		then(function(data){
			$scope.henchmen = data.data;
		}, function(error){
			console.log(error);
		});
}]);