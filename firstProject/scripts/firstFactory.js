app.factory('firstFactory', function($http){
	function getJsonArray(){
		return $http.get('data/data.json');
	}

	return {
		getJsonArray : getJsonArray
	}
});