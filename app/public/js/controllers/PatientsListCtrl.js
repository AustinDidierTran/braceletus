var app = angular.module('PatientsListCtrl', []);

app.controller('PatientsListController',
	function($location, $rootScope, $scope, DTOptionsBuilder, DTColumnDefBuilder, firebaseService, firebaseUser, utilityService, patientsListFilter) {

		$scope.title = 'État des patients';
		$scope.patients = firebaseService.getAll('patients');
		$scope.calculateAge = utilityService.calculateAge;
		$scope.dtInstance = {};
		$scope.dtOptions = DTOptionsBuilder.newOptions()
			.withPaginationType('full_numbers')
			.withOption('rowCallback', rowCallback)
			.withOption('order', [])
			.withBootstrap();
		$scope.dtColumnDefs = [
			DTColumnDefBuilder.newColumnDef(0).notSortable(), // ID
			DTColumnDefBuilder.newColumnDef(1).notSortable(), // Picture
			DTColumnDefBuilder.newColumnDef(2).notSortable(), // First Name
			DTColumnDefBuilder.newColumnDef(3).notSortable(), // Last Name
			DTColumnDefBuilder.newColumnDef(4).notSortable(),	// Age
			DTColumnDefBuilder.newColumnDef(5).notSortable(), // Sex
			DTColumnDefBuilder.newColumnDef(5).notSortable(), // Location
			DTColumnDefBuilder.newColumnDef(6).notSortable() // Condition
	  ];

		$scope.addPatient = function() {
			$location.path('/nouveau-patient');
		}

		var users = firebaseService.getUserByEmail(firebaseUser.email);
		users.$loaded().then(function() {
			$scope.canViewPatients = users[0] && users[0].type !== 'Aucun';
			$scope.canEditPatients = users[0] && users[0].type !== 'Aucun' && users[0].type !== 'Utilisateur Type 1';
		});

		function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
			// Unbind first in order to avoid any duplicate handler
			$('td', nRow).unbind('click');
			$('td', nRow).bind('click', function() {
				$location.path('/patient/' + aData[0]);
				$scope.$apply();
			});
			return nRow;
		}

});
