'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
	.controller('UsersInBankCtrl', function($scope, DTOptionsBuilder, $state) {
		//Predefine options for table
		$scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(25);

		$scope.users = {};

		function bringAll() {
			$scope.$parent.api.branch.getJsonAll({
				branchName: 'MONEDA',
				action: "",
				token: window.localStorage['APP_SECRET']
			}).then(function(response) {
				console.log(response);
				$scope.users = response;
			}, function(error) {
				console.log(error);
			})
		}

		setInterval(function() {
			bringAll();
		}, 5000);

		$scope.getYesOrNo = function(bool) {
			if (bool) {
				return "Si"
			} else {
				return "No"
			}
		}


	});