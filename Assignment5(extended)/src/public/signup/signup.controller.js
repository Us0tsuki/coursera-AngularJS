(function(){
"use strict";

angular.module('public')
.controller('signUpController', signUpController);

signUpController.$inject = ['items'];
function signUpController(items) {
  var $ctrl = this;
  $ctrl.items = items;
}

})();
