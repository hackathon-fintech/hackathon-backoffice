'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
	.controller('EmergenciesCtrl', function($scope, DTOptionsBuilder) {
		//Predefine options for table
		$scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(25);

		$scope.users = {};

		$scope.$parent.api.branch.getJsonAll({
			branchName: 'MONEDA',
			active: 'all'
		}).then(function(response) {
			console.log(response);
			$scope.users = response;
		}, function(error) {
			console.log(error);
		})
	});