angular.module('LoginCtrl', []).controller('LoginController', function($scope) {
  $scope.username = '';
  $scope.password = '';

  $scope.connect = function() {
    console.log('Username: ' + $scope.username + ' , Password: ' + $scope.password);
  }
  $scope.forgotPassword = function() {
    console.log('Forgot password...');
  }
  $scope.register = function() {
    console.log('Register...');
  }

});
