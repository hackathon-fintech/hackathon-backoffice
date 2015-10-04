'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
	.controller('UserRequirementsCtrl', function($scope, $stateParams, $state) {

		$scope.user = JSON.parse($stateParams.user);
		console.log($scope.user);
		$scope.deposits = [];
		$scope.details = [];

		$scope.$parent.api.branch.getJson({
			rut: $scope.user.rut
		}).then(function(response) {
			console.log(response)
			$scope.deposits = response
			for (var i = 0; i < $scope.deposits.length; i++) {				
				$scope.deposits[i].detail = getAmounts($scope.deposits[i].detail);
			}
		}, function(error) {
			console.log(error)
		})

		$scope.toggle = true;

		$scope.changeToggle = function() {
			if ($scope.toggle) {
				$scope.toggle = false;
			} else {
				$scope.toggle = true;
			}
		}

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

		$scope.sendDeposit = function(status, deposit) {
			deposit.status = status;
			console.log(deposit);
			$scope.$parent.api.branch.putJson({
				rut: $scope.user.rut,
				body: deposit
			}).then(function(response) {
				console.log(response);
				if (status == "DONE") {
					alert("Éxito realizando depósito");
				} else if (status == "IGNORE") {
					alert("Éxito ignorando depósito");
				}
				$state.reload();
			}, function(error) {
				console.log(error);
			})
		}

		function getAmounts(detail){
			var superDetail = [{
				type: 'change',
				amount: 0
			}, {
				type: '1000',
				amount: 0
			}, {
				type: '2000',
				amount: 0
			}, {
				type: '5000',
				amount: 0
			}, {
				type: '10000',
				amount: 0
			}, {
				type: '20000',
				amount: 0
			}]

			for (var i = 0; i < detail.length; i++) {
				for (var j = 0; j < superDetail.length; j++) {
					if (detail[i].type == superDetail[j].type) {
						superDetail[j].amount = detail[i].amount;
					}
				}
			}

			return superDetail
		}

	});