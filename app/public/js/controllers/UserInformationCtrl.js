var app = angular.module('UserInformationCtrl', []);

app.controller('UserInformationController',
	function($location, $rootScope, $scope, $route, firebaseService, firebaseUser) {

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

		var users = firebaseService.getUserByEmail(firebaseUser.email);
		users.$loaded().then(function() {
			$scope.user = users[0];
			$scope.isAdmin = $scope.user.type == 'Administrateur';
			$scope.isUser = $scope.user.email == $scope.user.email;
		});

});
