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