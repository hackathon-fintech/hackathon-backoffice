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

		$scope.toUserRequirements = function(){
			$state.go('dashboard.userRequirements');
		}

	});