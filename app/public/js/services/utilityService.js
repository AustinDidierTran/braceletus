angular.module('UtilityService', []).service('utilityService', function() {

  this.calculateAge = function(date) {
    var birthDate = new Date(date);
    var currentDate = new Date();

    var age = currentDate.getFullYear() - birthDate.getFullYear();

    if(birthDate.getMonth() > currentDate.getMonth()) {
      age--;
    } else if (birthDate.getMonth() == currentDate.getMonth() && birthDate.getDate() > currentDate.getDate()) {
      age--
    }

    return age;
  }

  this.validateDate = function(date) {
    var dateRegex = /^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/;
    return dateRegex.test(date);
  }

  this.validatePhoneNumber = function(phoneNumber) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneNumber.match(phoneno);
  }

});
