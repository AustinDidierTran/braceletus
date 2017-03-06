var app = angular.module('appRoutes', ['firebase']);

app.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController',
      resolve: {
        firebaseUser: ["Auth", function(Auth) {
          return Auth.$waitForSignIn();
        }]
      }
    })
  	.when('/patients', {
  		templateUrl: 'views/patients-liste.html',
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
        }]
      }
    })
    .otherwise({redirectTo:'/login'});

    $locationProvider.html5Mode(true);
  }
]);


app.run(['$location', '$rootScope', function($location, $rootScope) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $rootScope.user = user;
      if ($location.path() === '/login') {
        $location.path('/patients');
      }
    } else {
      $rootScope.user = null;
      $location.path('/login');
    }
  });
}]);
