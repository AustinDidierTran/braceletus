angular.module('PatientInformationCtrl', []).controller('PatientInformationController',
	function($location, $scope, $route, patientInfos, firebaseService) {

		$scope.title = 'Informations sur le patient';
		$scope.patient = patientInfos;
		$scope.autonomyTypes = ['Autonome', 'Semi-autonome', 'Non autonome'];
		$scope.sexTypes = ['Homme', 'Femme'];

		$scope.archivePatient = function() {
			firebaseService.save('/patients/' + $route.current.params.id, { isStable: "11" });
		}

		$scope.restorePatient = function() {
			firebaseService.save('/patients/' + $route.current.params.id, { isStable: "01" });
		}

	  $scope.savePatient = function() {
			if (!$scope.patient.sex || !$scope.patient.birthdate || !$scope.patient.address || !$scope.patient.phoneNumber) {
				alert('Certains champs obligatoires sont vides.');
			} else if (isNaN(Date.parse($scope.patient.birthdate))) {
				alert('La date de naissance entrée est invalide.');
			} else if (!validatePhoneNumber($scope.patient.phoneNumber)) {
				alert('Le numéro de téléphone entré est invalide.')
			} else {
				firebaseService.save('/patients/' + $route.current.params.id, JSON.parse(angular.toJson($scope.patient)));
			 	alert('Les informations sur le patient ' + $route.current.params.id + ' ont été correctement enregistrées.');
			}
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
