var myApp=angular.module('myApp', []);

myApp.controller('myController', function ($scope, $http){
	$http.get('http://localhost:3001').then(function (theData){
		$scope.weatherJSON = theData.data;

	var date = new Date($scope.weatherJSON.dt);
	var sunrise = new Date($scope.weatherJSON.sys.sunrise);
	console.log($scope.weatherJSON.dt);
	console.log($scope.weatherJSON.sys.sunrise);

	})

});

