var app = angular.module('LoginCtrl', []);

app.controller('LoginController', function($location, $rootScope, $scope, $timeout, firebaseService) {

  // TODO: Replace alerts by ui-bootstrap-alerts: https://angular-ui.github.io/bootstrap/
  $scope.user = { email: '', password: '' };

  $scope.myFunct = function(keyEvent) {
    if (keyEvent.which === 13) {
      $scope.signIn();
    }
  }

  $scope.resetPassword = function() {
    firebaseService.resetPassword($scope.user.email).then(function() {
      alert('Un courriel de réinitialisation du mot de passe a été envoyé à l\'addresse ' + $scope.user.email);
    }, function(error) {
      alert('Impossible d\'envoyer un courriel à l\'addresse suivante: ' + $scope.user.email);
    });
  }

  $scope.signIn = function() {
    firebaseService.signIn($scope.user.email, $scope.user.password).then(function(user) {
      $rootScope.user = user; // TODO: Store the user in cache?
      $location.path('/patients');
      $scope.$apply();
    }).catch(function(error) {
      console.log(error.code + ': ' + error.message);
      alert('Le nom d\'utilisateur ou le mot de passe est incorrect');
    });
  }

  $scope.signUp = function() {}

});
