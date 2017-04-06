angular.module('FirebaseService', []).service('firebaseService', function($firebaseArray, $firebaseObject) {

  this.getAll = function(key) {
    var ref = firebase.database().ref().child(key);
    return $firebaseArray(ref);
  }

  this.save = (key, obj, _callback) => {
    const ref = firebase.database().ref(key);

    const object = $firebaseObject(ref);

    object.$loaded().then(function(o1) {
      for(let i in obj) {
        object[i] = obj[i];
      }

      object.$save().then(function(o2) {
        if(callback) {
          _callback(o2);
        }
      })
    })
  }

  this.getImageFullPath = function(key) {
    var storageRef = firebase.storage().ref();
    return storageRef.child(key).getDownloadURL();
  }

  this.setUserPassword = function(newPassword) {
    var user = firebase.auth().currentUser; // The user is using Firebase
    return user.updatePassword(newPassword);
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
