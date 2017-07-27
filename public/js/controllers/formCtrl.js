angular.module('formCtrl', []).controller('FormController', 
    function($scope, $http) {

    	$scope.inputData = {

    	


    	};


    	$scope.addRest = function(response){
			console.log($scope.inputData);
			
    	}



    });