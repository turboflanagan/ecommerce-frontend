var myApp=angular.module('myApp', []);

myApp.controller('myController', function ($scope, $http){
	$http.get('http://localhost:3001').then(function (theData){
		$scope.weatherJSON = theData.data;

		
		
	});
});