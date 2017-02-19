angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider

        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginController'
        })
    		.when('/patients', {
    			templateUrl: 'views/patients-liste.html',
    			controller: 'PatientsListController'
    		})
        .when('/patient/:id', {
          templateUrl: 'views/patient-information.html',
          controller: 'PatientInformationController'
        })
        .otherwise({redirectTo:'/login'});

        $locationProvider.html5Mode(true);
    }
]);