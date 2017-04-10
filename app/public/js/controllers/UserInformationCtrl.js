var app = angular.module('UserInformationCtrl', []);

app.controller('UserInformationController',
	function($location, $scope) {

    $scope.title = "Information sur l'utilisateur";
    $scope.permissionTypes = ['Aucun', 'Utilisateur Type 1', 'Utilisateur Type 2', 'Administrateur'];
    $scope.user = {
      email: 'benji015@hotmail.com',
      firstName: 'Benjamin',
      lastName: 'Roy',
      type: $scope.permissionTypes[3],
    };

		$scope.cancel = function() {
			$location.path('/utilisateurs');
		}

    $scope.saveUser = function() { }

});
