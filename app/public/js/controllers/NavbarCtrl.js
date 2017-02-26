var app = angular.module('NavbarCtrl', []);

app.controller('NavbarController', function($scope, firebaseService) {

  $scope.setUserPassword = function() {
    var newPassword = 'azerty'; // TODO: Design Interface To Change User Password

    firebaseService.setUserPassword(newPassword).then(function() {
      alert('Your password has been successfully changed!');
    }, function(error) {
      alert(error);
    });
  }

  $scope.signOut = function() {
    firebaseService.signOut().then(function() {
      console.log('User is signed out');
    })
  }

});
