angular.module('PatientsListCtrl', []).controller('PatientsListController', function($scope) {

	// Données temporaires pour le front end
	$scope.title = 'État des patients';
	$scope.patients = [
		{firstName: 'Roy', lastName: 'Benjamin', age: 78, condition: 'stable'},
		{firstName: 'Tran', lastName: 'Austin-Didier', age: 78, condition: 'instable'},
	];
});
