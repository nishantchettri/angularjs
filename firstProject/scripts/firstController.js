app.controller('firstController', function($scope, firstFactory){
	$scope.showMessage = false;
	$scope.images = [];
	$scope.imageUrl = "";

	firstFactory.getJsonArray().then(function(res){
		$scope.images = res.data;
	}, function error(error){
		console.log(error);
	});

	$scope.openAlert = function(){
		!$scope.showMessage ? $scope.showMessage = true : $scope.showMessage = false;
	}

	$scope.openModal = function(url){
		$scope.imageUrl = url;
		$("#myModal").modal("show");
	}
});