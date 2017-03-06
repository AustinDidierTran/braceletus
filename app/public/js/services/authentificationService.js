// Documentation On User Auth: https://github.com/firebase/angularfire/blob/master/docs/guide/user-auth.md
app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);
