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
			$location.path('/utilisateurs');
    }

		var users = firebaseService.getUserByEmail(firebaseUser.email);
		users.$loaded().then(function() {
			$scope.isAdmin = users[0].type == 'Administrateur';
			$scope.isUser = users[0].email == $scope.user.email;
		});

});
