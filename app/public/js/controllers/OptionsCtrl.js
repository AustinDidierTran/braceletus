angular.module('OptionsCtrl', []).controller('OptionsController',
	function($location, $scope, firebaseService) {

    $scope.password1 = "";
		$scope.password2 = "";

    $scope.setNewPassword = function() {
      if ($scope.password1 !== $scope.password2) {
        alert('Les mots de passe entrés ne correspondent pas.');
      } else {
        firebaseService.setUserPassword($scope.password1).then(function() {
          alert('Le mot de passe a été correctement modifié.');
          $location.path('/patients');
					$scope.$apply();
        }, function(error) {
          alert(error);
        });
      }
    }

});
