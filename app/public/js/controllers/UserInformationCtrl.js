var app = angular.module('UserInformationCtrl', []);

app.controller('UserInformationController',
	function($location, $rootScope, $scope, $route, firebaseService) {

    $scope.title = "Information sur l'utilisateur";
    $scope.permissionTypes = ['Aucun', 'Utilisateur Type 1', 'Utilisateur Type 2', 'Administrateur'];
    $scope.user = firebaseService.getUserById($route.current.params.id);

		$scope.cancel = function() {
			$location.path('/utilisateurs');
		}

    $scope.saveUser = function() { 
      var obj = {
        firstName: $scope.user.firstName,
        lastName: $scope.user.lastName,
        type: $scope.user.type
      }

      firebaseService.saveUser($route.current.params.id, obj);
    }

    setTimeout(function() {
      $scope.isAdmin = $rootScope.currentUser[0].type == 'Administrateur';
      $scope.isUser = $rootScope.currentUser[0].email == $scope.user.email;
      $scope.$apply();
    }, 1000);
});
