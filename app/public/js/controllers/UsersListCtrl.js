var app = angular.module('UsersListCtrl', []);

app.controller('UsersListController',
  function($scope, DTOptionsBuilder, DTColumnDefBuilder, firebaseService) {

    // TODO: Fetch users data from firebase:

    $scope.title = 'Liste des utilisateurs';
    $scope.types = [ 'Administrateur', 'Utilisateur' ];
    $scope.users = firebaseService.getUsers();
  	$scope.dtInstance = {};
    $scope.dtOptions = DTOptionsBuilder.newOptions()
      .withPaginationType('full_numbers')
      .withOption('order', [])
      .withBootstrap();
    $scope.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0).notSortable(), // Picture
      DTColumnDefBuilder.newColumnDef(1).notSortable(), // Email
      DTColumnDefBuilder.newColumnDef(2).notSortable(), // First Name
      DTColumnDefBuilder.newColumnDef(3).notSortable(), // Last Name
      DTColumnDefBuilder.newColumnDef(4).notSortable(),	// Type
      DTColumnDefBuilder.newColumnDef(5).notSortable(),	// Action
    ];

    $scope.addUser = function() { }
    $scope.editUser = function(user) { }
    $scope.deleteUser = function(user) { }

});
