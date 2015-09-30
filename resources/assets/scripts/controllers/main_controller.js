app.controller("MainController", ['$scope', '$http', function($scope, $http) {
	
	$scope.henchmen = {};

	$scope.henchmenName = '';

	$scope.createHenchmen = function () {
		$http.post('/henchmen/' + $scope.henchmenName).
			then(function(data){
				$scope.henchmen.push({
					id : data.data.id,
					name : data.data.name,
				});
				console.log(data.data);
			}, function(error){
				console.log(error);
			});
		$scope.henchmenName = '';		
	}

	$scope.delete = function (id) {
		$http.delete('/henchmen/' + id).
			then(function(data){
				$scope.henchmen = data.data;
			}, function(error){
				console.log(error);
			});
	}

	$http.get('/henchmen').
		then(function(data){
			$scope.henchmen = data.data;
			console.log(data.data);
		}, function(error){
			console.log(error);
		});

}]);