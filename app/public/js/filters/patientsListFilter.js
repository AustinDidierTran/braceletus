angular.module('PatientsListFilter', []).filter('patientsList', function() {

  var orderByStatus = function(status) {
		switch (status) {
			case '0':     // État stable
				return 2;
			case '1':     // État nstable
				return 1;
			case '2':     // Dossier archivé
				return 3;
			}
	}

  return function(patients, field) {
    var filtered = patients;
    filtered.sort(function (a, b) {
      return (orderByStatus(a.isStable) > orderByStatus(b.isStable) ? 1 : -1);
    });
    return filtered;
  };

});
