'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
	.controller('UserRequirementsCtrl', function($scope) {

		$scope.toggle = true;

		$scope.example = {}
		$scope.example.firstName = 'Juan Segura';
		$scope.example.account = '77777777777-7';
		$scope.example.amount = '300.000'

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