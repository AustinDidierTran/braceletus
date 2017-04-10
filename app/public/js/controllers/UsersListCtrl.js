var app = angular.module('UsersListCtrl', []);

app.controller('UsersListController',
  function($location, $scope, DTOptionsBuilder, DTColumnDefBuilder, firebaseService) {

    $scope.title = 'Liste des utilisateurs';
    $scope.types = [ 'Administrateur', 'Utilisateur' ];
    $scope.users = firebaseService.getUsers();
  	$scope.dtInstance = {};
    $scope.dtOptions = DTOptionsBuilder.newOptions()
      .withPaginationType('full_numbers')
      .withOption('rowCallback', rowCallback)
      .withOption('order', [])
      .withBootstrap();
    $scope.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0).notSortable(),	// ID
      DTColumnDefBuilder.newColumnDef(1).notSortable(), // Picture
      DTColumnDefBuilder.newColumnDef(2).notSortable(), // Email
      DTColumnDefBuilder.newColumnDef(3).notSortable(), // First Name
      DTColumnDefBuilder.newColumnDef(4).notSortable(), // Last Name
      DTColumnDefBuilder.newColumnDef(5).notSortable(),	// Type
      DTColumnDefBuilder.newColumnDef(6).notSortable(),	// Action
    ];

    $scope.addUser = function() { }
    $scope.deleteUser = function(user) { }

    function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
      // Unbind first in order to avoid any duplicate handler
      $('td', nRow).unbind('click');
      $('td', nRow).bind('click', function() {
        $location.path('/utilisateur/' + aData[0]);
        $scope.$apply();
      });
      return nRow;
    }

});
