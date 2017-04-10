angular.module('UtilityService', []).service('utilityService', function() {

  this.calculateAge = function(date) {
    var birthDate = new Date(date);
    var currentDate = new Date();
    var diff = currentDate - birthDate;  // Différence en milliseconds
    return Math.floor(diff/31557600000); // Nombre de milliseconds par années (1000*60*60*24*365.25)
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
