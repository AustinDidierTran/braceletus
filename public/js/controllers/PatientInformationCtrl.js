angular.module('PatientInformationCtrl', []).controller('PatientInformationController', function($scope, $route) {

	// Temporary data for the front-end
	$scope.title = 'État des patients';

  // The user should be retrieved with the id from firebase
	$scope.patient = {
    id: $route.current.params.id,
    firstName: 'Roy', 
    lastName: 'Benjamin', 
    age: 78, 
    condition: 'stable'
  };
});
