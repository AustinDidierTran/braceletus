angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider

    		.when('/patients', {
    			templateUrl: 'views/patients-liste.html',
    			controller: 'PatientsListController'
    		})
            .when('/patient/:id', {
                templateUrl: 'views/patient-information.html',
                controller: 'PatientInformationController'
            })
            .otherwise({redirectTo:'/patients'});

        $locationProvider.html5Mode(true);
    }
]);
