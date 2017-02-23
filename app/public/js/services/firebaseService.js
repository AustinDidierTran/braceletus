angular.module('FirebaseService', []).service('firebaseService', function($firebaseArray) {

  this.getAll = function(key) {
    var ref = firebase.database().ref().child(key);
    return $firebaseArray(ref);
  }

  this.getImageFullPath = function(key) {
    var storageRef = firebase.storage().ref();
    return storageRef.child(key).getDownloadURL();
  }

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
