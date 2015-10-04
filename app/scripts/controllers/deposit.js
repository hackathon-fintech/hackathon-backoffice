'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
	.controller('DepositCtrl', function($scope, $state, DTOptionsBuilder) {
		//Predefine options for table
		$scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(25);

		$scope.users = {}

		$scope.$parent.api.branch.getJsonAll({
			branchName: 'MONEDA',			
			token: window.localStorage["APP_SECRET"]
		}).then(function(response) {
			console.log(response);
			$scope.users = response;
		}, function(error) {
			console.log(error);
		})

		// Move to Requirements view
		$scope.toUserRequirements = function(user) {
			$state.go('dashboard.userRequirements', {
				user: JSON.stringify(user)
			});
		}

		$scope.translate = function(string) {
			if (string == 'TELLER') {
				return 'Depósito'
			}
		}

	});