angular.module('devmtnTravel')
	.controller('packageCtrl', function($scope, mainSrv) {
			$scope.travelInfo = mainSrv.travelInfo;
	})