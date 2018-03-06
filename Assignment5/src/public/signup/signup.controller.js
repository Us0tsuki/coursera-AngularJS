(function(){
"use strict";

angular.module('public')
.controller('signUpController', signUpController);

signUpController.$inject = ['MenuService', '$scope', '$timeout'];
function signUpController(MenuService, $scope, $timeout) {
  var $ctrl = this;
  $ctrl.first_name = "";
  $ctrl.last_name = "";
  $ctrl.email = "";
  $ctrl.phone = "";
  $ctrl.favorite = "";
  $ctrl.error = false;
  $ctrl.success = false;
  $ctrl.saveInfo = function() {
    MenuService.saveUserInfo($ctrl.first_name, $ctrl.last_name, $ctrl.email, $ctrl.phone, $ctrl.favorite).then(function() {
      $ctrl.success = true;
      $timeout(function() {
         $ctrl.success = false;
      }, 3000);
      $ctrl.error = false;
      $ctrl.first_name = "";
      $ctrl.last_name = "";
      $ctrl.email = "";
      $ctrl.phone = "";
      $ctrl.favorite = "";
      $scope.sign_up.$setUntouched();
    })
    .catch(function(){
      $ctrl.error = true;
      $ctrl.success = false;
    });
  }

}

})();
