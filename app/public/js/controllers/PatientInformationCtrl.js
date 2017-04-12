angular.module('PatientInformationCtrl', []).controller('PatientInformationController',
	function($location, $rootScope, $scope, $route, patientInfos, firebaseService, firebaseUser, utilityService) {

		$scope.title = 'Informations sur le patient';
		$scope.patient = patientInfos;
		$scope.autonomyTypes = ['Autonome', 'Semi-autonome', 'Non autonome'];
		$scope.sexTypes = ['Homme', 'Femme'];

		$scope.archivePatient = function() {
			firebaseService.save('/patients/' + $route.current.params.id, { isStable: "2" });
		}

		$scope.restorePatient = function() {
			firebaseService.save('/patients/' + $route.current.params.id, { isStable: "0" });
		}

	  $scope.savePatient = function() {
			if (!$scope.patient.sex || !$scope.patient.birthdate || !$scope.patient.address || !$scope.patient.phoneNumber) {
				alert('Certains champs obligatoires sont vides.');
			} else if (!utilityService.validateDate($scope.patient.birthdate)) {
				alert('La date de naissance entrée est invalide.');
			} else if (!utilityService.validatePhoneNumber($scope.patient.phoneNumber)) {
				alert('Le numéro de téléphone entré est invalide.')
			} else {
				firebaseService.save('/patients/' + $route.current.params.id, JSON.parse(angular.toJson($scope.patient)));
			 	alert('Les informations sur le patient ' + $route.current.params.id + ' ont été correctement enregistrées.');
			}
	  }

		var users = firebaseService.getUserByEmail(firebaseUser.email);
		users.$loaded().then(function() {
			$scope.canViewPatients = users[0] && users[0].type !== 'Aucun';
			$scope.canEditPatients = users[0] && users[0].type !== 'Aucun' && users[0].type !== 'Utilisateur Type 1';
		});

});
