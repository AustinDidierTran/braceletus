var app = angular.module('NavbarCtrl', []);

app.controller('NavbarController',
  function($location, $scope, firebaseService) {

    $scope.setUserPassword = function() {
      $location.path('/options');
    }

    $scope.signOut = function() {
      firebaseService.signOut().then(function() { });
    }

});
