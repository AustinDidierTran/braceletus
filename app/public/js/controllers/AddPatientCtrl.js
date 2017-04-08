angular.module('AddPatientCtrl', []).controller('AddPatientController',
	function($location, $scope, $route, firebaseService) {

		firebaseService.getAll('patients/').$loaded().then(function(patientsList) {
			$scope.patientId = patientsList.length + 1;
		});;

		$scope.title = 'Ajout d\'un nouveau patient';
		$scope.autonomyTypes = ['Autonome', 'Semi-autonome', 'Non autonome'];
		$scope.sexTypes = ['Homme', 'Femme'];
		$scope.patient = {
			rfid: '',
			lastName: '',
			firstName: '',
			isStable: '01',
			sex: $scope.sexTypes[0],
			birthdate: '',
			address: '',
			phoneNumber: '',
			hospitalizationReason: '',
			allergy: '',
			medication: '',
			alimentation: '',
			autonomy: $scope.autonomyTypes[0],
			others: '',
		}

		$scope.addNewPatient = function() {
			if (!$scope.patient.firstName || !$scope.patient.lastName || !$scope.patient.sex || !$scope.patient.birthdate || !$scope.patient.address || !$scope.patient.phoneNumber) {
				alert('Certains champs obligatoires sont vides.');
			} else if (!validatePhoneNumber($scope.patient.phoneNumber)) {
				alert('Le numéro de téléphone entré est invalide.')
			} else {
				firebaseService.addPatient('/patients', $scope.patientId, $scope.patient);
				$location.path('/patients');
			}
		}

		$scope.cancel = function() {
			$location.path('/patients');
		}

		var validatePhoneNumber = function(phoneNumber) {
			var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		  if (phoneNumber.match(phoneno)) {
		    return true;
		  } else {
		    return false;
		  }
		}

});
