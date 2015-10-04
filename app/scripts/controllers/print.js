'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
	.controller('PrintCtrl', function($scope, $stateParams) {
		$scope.deposits = JSON.parse($stateParams.deposits);		

		for (var i = 0; i < $scope.deposits.length; i++) {
			for(var j = 0; j < $scope.deposits[i].detail.length; j++){
				if($scope.deposits[i].detail[j].type == 'CHECK'){
					$scope.deposits[i].check =true;
				} else{
					$scope.deposits[i].cash = true;
				}
			}
		}

		console.log($scope.deposits);

		$scope.getTodaysDate = function() {
			var today = new Date();
			return today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
		}

		$scope.getTotal = function(detail) {
			var total = 0;
			for (var i = 0; i < detail.length; i++) {
				total = total + detail[i].amount;
			}

			return total
		}
	});