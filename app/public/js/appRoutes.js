var app = angular.module('appRoutes', ['firebase']);

app.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $routeProvider
    .when('/connexion', {
      templateUrl: 'views/login.html',
      controller: 'LoginController',
      resolve: {
        firebaseUser: ["Auth", function(Auth) {
          return Auth.$waitForSignIn();
        }]
      }
    })
  	.when('/patients', {
  		templateUrl: 'views/patients-list.html',
  		controller: 'PatientsListController',
      resolve: {
        firebaseUser: ["Auth", function(Auth) {
          return Auth.$waitForSignIn();
        }]
      }
  	})
    .when('/patient/:id', {
      templateUrl: 'views/patient-information.html',
      controller: 'PatientInformationController',
      resolve: {
        firebaseUser: ["Auth", function(Auth) {
          return Auth.$waitForSignIn();
        }],
        patientInfos: function($route, firebaseService) {
          return firebaseService.getPatient($route.current.params.id);
        }
      }
    })
    .when('/erreur', {
      templateUrl: 'views/error404.html',
      controller: 'PatientInformationController'
    })
    .when('/nouveau-patient', {
      templateUrl: 'views/new-patient.html',
      controller: 'AddPatientController',
      resolve: {
        firebaseUser: ["Auth", function(Auth) {
          return Auth.$waitForSignIn();
        }]
      }
    })
    .when('/options', {
      templateUrl: 'views/password-mgmt.html',
      controller: 'OptionsController'
    })
    .when('/utilisateurs', {
      templateUrl: 'views/users-list.html',
      controller: 'UsersListController',
      resolve: {
        firebaseUser: ["Auth", function(Auth) {
          return Auth.$waitForSignIn();
        }]
      }
    })
    .when('/utilisateur/:id', {
      templateUrl: 'views/user-information.html',
      controller: 'UserInformationController',
    })
    .otherwise({redirectTo:'/connexion'});

    $locationProvider.html5Mode(true);
  }
]);


app.run(['$location', '$rootScope', 'firebaseService', function($location, $rootScope, firebaseService) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $rootScope.currentUser = firebaseService.getUserByEmail(user.email);
      if ($location.path() === '/connexion') {
        $location.path('/patients');
      }
    } else {
      $rootScope.currentUser = null;
      $location.path('/connexion');
    }
  });
}]);
