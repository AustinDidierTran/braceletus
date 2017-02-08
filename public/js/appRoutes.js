angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider

    		.when('/état-patients', {
    			templateUrl: 'views/patients-condition.html',
    			controller: 'PatientConditionController'
    		})

            .otherwise({redirectTo:'/état-patients'});

        $locationProvider.html5Mode(true);
    }
]);
