angular.module('PatientsListCtrl', []).controller('PatientsListController',
function($compile, $location, $scope, DTOptionsBuilder, DTColumnBuilder) {

	$scope.title = 'État des patients';
	$scope.dtInstance = {};
	$scope.dtOptions = DTOptionsBuilder.newOptions()
		.withOption('data', [
			{id: 1, picture: null, firstName: 'Roy', lastName: 'Benjamin', age: 78, sex: 'Homme', isStable: true},
			{id: 2, picture: null, firstName: 'Tran', lastName: 'Austin-Didier', age: 78, sex: 'Femme', isStable: false},
		])
		.withPaginationType('full_numbers')
		.withOption('rowCallback', rowCallback)
		.withOption('createdRow', createdRow)
		.withBootstrap();

	$scope.dtColumns = [
		DTColumnBuilder.newColumn('id').withTitle('ID'),
		DTColumnBuilder.newColumn('picture').withTitle('Photo').renderWith(setProfilPicture),
		DTColumnBuilder.newColumn('firstName').withTitle('Prénom'),
		DTColumnBuilder.newColumn('lastName').withTitle('Nom'),
		DTColumnBuilder.newColumn('age').withTitle('Âge'),
		DTColumnBuilder.newColumn('sex').withTitle('Sexe'),
		//DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml)
	];

	$scope.addPatient = function() { console.log('Add patient'); }

	function createdRow(row, data, dataIndex) {
		// Recompiling so we can bind Angular directive
		if (!data.isStable) {
			$('td', row).css('background-color', '#FFCDD2');
		}
		$compile(angular.element(row).contents())($scope);
	}

	function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
		// Unbind first in order to avoid any duplicate handler
		$('td', nRow).unbind('click');
		$('td', nRow).bind('click', function() {
			$location.path('/patient/' + aData.id);
			$scope.$apply();
		});
		return nRow;
	}

	/*function actionsHtml(data, type, full, meta) {
		return '<button class="btn btn-warning" ng-click="">' +
			'   <i class="fa fa-edit"></i>' +
			'</button>&nbsp;' +
			'<button class="btn btn-danger" ng-click="" )"="">' +
			'   <i class="fa fa-trash-o"></i>' +
			'</button>';
	}*/

	function setProfilPicture(data, type, full, meta) {
		var imagePath;
		if (data === null && full.sex === 'Femme') {
			imagePath = '../../img/female-picture.png';
		} else if (data === null && full.sex === 'Homme') {
			imagePath = '../../img/male-picture.png';
		} else {
			// TODO: Fetch profil picture from database.

		}
		return '<img src=' + imagePath + '>'
	}
});
