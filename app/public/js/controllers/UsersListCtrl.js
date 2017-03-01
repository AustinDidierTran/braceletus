var app = angular.module('UsersListCtrl', []);

app.controller('UsersListController',
  function($scope, DTOptionsBuilder, DTColumnDefBuilder, firebaseService) {

    // TODO: Fetch users data from firebase:

  	$scope.title = 'Liste des utilisateurs';
    $scope.types = [ 'Administrateur', 'Utilisateur' ];
    $scope.users = [
      {
        email: 'austin.didier.tran@gmail.com',
        picture: 'https://firebasestorage.googleapis.com/v0/b/braceletus-7a2e6.appspot.com/o/images%2Fusers%2Faustindidiertran.jpg?alt=media&token=c50fc365-8e81-41e0-9076-d6d4839ce28c',
        firstName: 'Austin-Didier',
        lastName: 'Tran',
        type: 'Utilisateur'
      },
      {
        email: 'benji015@hotmail.com',
        picture: 'https://firebasestorage.googleapis.com/v0/b/braceletus-7a2e6.appspot.com/o/images%2Fusers%2Fbenjaminroy.jpg?alt=media&token=58178873-83ee-408f-b8b5-ae8914431222',
        firstName: 'Benjamin',
        lastName: 'Roy',
        type: 'Administrateur'
      }
    ];
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
