
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBKjNO1GcxwDVylqAizWQgMKK3NeOGGJO0",
    authDomain: "braceletus-7a2e6.firebaseapp.com",
    databaseURL: "https://braceletus-7a2e6.firebaseio.com",
    storageBucket: "braceletus-7a2e6.appspot.com",
    messagingSenderId: "90223967938"
};
firebase.initializeApp(config);

angular.module('braceletusApp', [
    'ngRoute',
    'appRoutes',
    'datatables',
    'datatables.bootstrap',
    'firebase',
    'FirebaseService',
    'LoginCtrl',
    'NavbarCtrl',
    'PatientInformationCtrl',
    'PatientsListCtrl',
    'UsersListCtrl'
]).run(function(DTDefaultOptions) {
  DTDefaultOptions.setLanguage({
    sUrl: 'https://cdn.datatables.net/plug-ins/1.10.13/i18n/French.json' // Set the default language for all datatables.
  });
});
