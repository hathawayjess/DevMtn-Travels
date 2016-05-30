angular.module('devmtnTravel')
	.controller('bookedCtrl', function($scope, mainSrv, $state) {

		var travelArray = mainSrv.travelInfo;
		$scope.travelInfo = travelArray;


		for (var i = 0; i < travelArray.length; i++) {
			if ($state.params.id == travelArray[i].id) { //$state.params is a string! Use == instead of ===
				$scope.booked = travelArray[i];
			}
		}

	})