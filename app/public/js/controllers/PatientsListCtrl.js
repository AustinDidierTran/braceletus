angular.module('PatientsListCtrl', []).controller('PatientsListController', function($scope, DTOptionsBuilder, DTColumnBuilder) {

	$scope.title = 'État des patients';
	$scope.dtInstance = {};
	$scope.dtOptions = DTOptionsBuilder.newOptions()
		.withOption('data', [
			{id: 1, picture: null, firstName: 'Roy', lastName: 'Benjamin', age: 78, isStable: true},
			{id: 2, picture: null, firstName: 'Tran', lastName: 'Austin-Didier', age: 78, isStable: false},
		])
		.withPaginationType('full_numbers')
		.withOption('rowCallback', rowCallback);

	$scope.dtColumns = [
		DTColumnBuilder.newColumn('id').withTitle('ID'),
		DTColumnBuilder.newColumn('picture').withTitle('Photo'),
		DTColumnBuilder.newColumn('firstName').withTitle('Prénom'),
		DTColumnBuilder.newColumn('lastName').withTitle('Nom'),
		DTColumnBuilder.newColumn('isStable').withTitle('Est stable'),
		DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml)
	];

	function actionsHtml(data, type, full, meta) {
		return '<button class="btn btn-warning" ng-click="">' +
			'   <i class="fa fa-edit"></i>' +
			'</button>&nbsp;' +
			'<button class="btn btn-danger" ng-click="" )"="">' +
			'   <i class="fa fa-trash-o"></i>' +
			'</button>';
	}

	/**** This function will be used to redirect the user to the patient information view ***/
	function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
		// Unbind first in order to avoid any duplicate handler
		$('td', nRow).unbind('click');
		$('td', nRow).bind('click', function() {
				console.log('Row has been clicked');
		});
		return nRow;
	}

});
