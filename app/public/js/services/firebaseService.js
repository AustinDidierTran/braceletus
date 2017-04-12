angular.module('FirebaseService', []).service('firebaseService', function($firebaseArray, $firebaseObject) {

  this.addPatient = function(key, id, patient) {
    const ref = firebase.database().ref(key).child(id).set(patient);
  }

  this.getAll = function(key) {
    const ref = firebase.database().ref(key);
    return $firebaseArray(ref);
  }

  this.getUserById = function(id) {
    var ref = firebase.database().ref('users/' + id);
    return $firebaseObject(ref);
  }

  this.getUserByEmail = function(email) {
    var ref = firebase.database().ref('users/');

    return $firebaseArray(ref.orderByChild('email').equalTo(email));
  }

  this.getUsers = function() {
    const ref = firebase.database().ref('users/');
    return $firebaseArray(ref);
  }

  this.getPatient = function(id) {
    const ref = firebase.database().ref('patients/' + id);
    return $firebaseObject(ref);
  }

  this.createObject = function(key, obj, _callback) {
      const ref = firebase.database().ref(key);
      const list = $firebaseArray(ref);

      return list.$add(obj);
    };

  this.getObjectsWithAttribute = function(key, attr, value) {
    var ref = firebase.database().ref(key);

    return $firebaseArray(ref.orderByChild(attr).equalTo(value));
  }

  this.saveUser = function(id, obj, _callback) {
    var ref = firebase.database().ref('users/'+id);

    var object = $firebaseObject(ref);

    object.$loaded().then(function(o1) {
      for(var i in obj) {
        object[i] = obj[i];
      }

      object.$save().then(function(o2) {
        if(_callback) {
          _callback(o2);
        }
      })
    })

  }

  this.save = function(key, obj, _callback) {
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
