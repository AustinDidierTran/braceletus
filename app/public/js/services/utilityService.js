angular.module('UtilityService', []).service('utilityService', function() {

  this.validatePhoneNumber = function(phoneNumber) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneNumber.match(phoneno);
  }

});
