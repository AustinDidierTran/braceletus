angular.module('FirebaseService', []).service('firebaseService', function($rootScope) {

  this.resetPassword = function(email) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  this.signIn = function (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  this.signOut = function() {
    return firebase.auth().signOut();
  }

  this.signUp = function(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

});
