angular.module('OptionsCtrl', []).controller('OptionsController',
	function($location, $scope, firebaseService) {

    $scope.currentUser = { password1: "", password2: "" }

    $scope.setNewPassword = function() {
      if ($scope.currentUser.password1 !== $scope.currentUser.password2) {
        alert('Les mots de passe entrés ne correspondent pas.');
      } else {
        firebaseService.setUserPassword($scope.currentUser.password1).then(function() {
          alert('Le mot de passe a été correctement modifié.');
          $location.path('/patients');
					$scope.$apply();
        }, function(error) {
          alert(error);
        });
      }
    }
		
});
