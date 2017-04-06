angular.module('PatientInformationCtrl', []).controller('PatientInformationController', function($scope, $route, firebaseService) {

	// Temporary data for the front-end
	$scope.title = 'État des patients';

  // The user should be retrieved with the id from firebase
	$scope.patient = {
    rfid: 'aisduhfiu245',
    id: $route.current.params.id,
    firstName: 'Benjamin',
    lastName: 'Roy',
    age: 78,
    condition: 'stable',
    address: '1651 rue denault'
  };

  $scope.savePatient = function() {
    console.log('saving patient');
    firebaseService.save('/patients/'+$route.current.params.id, $scope.patient);
  };
});
