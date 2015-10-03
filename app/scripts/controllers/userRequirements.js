'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
	.controller('UserRequirementsCtrl', function($scope, $stateParams) {

		$scope.user = JSON.parse($stateParams.user);
		console.log($scope.user);

		$scope.$parent.api.branch.getJson({
			rut: $scope.user.rut
		}).then(function(response){
			console.log(response)
		}, function(error){
			console.log(error)
		})

		$scope.toggle = true;

		$scope.changeToggle = function(){
			if($scope.toggle){
				$scope.toggle = false;
			} else{
				$scope.toggle = true;
			}
		}		

		$scope.getTodaysDate = function(){
			var today = new Date();			
			return today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
		}

	});