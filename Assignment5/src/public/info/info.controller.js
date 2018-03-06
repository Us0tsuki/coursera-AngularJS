(function(){
"use strict";

angular.module('public')
.controller('infoController', infoController);

infoController.$inject = ['MenuService', '$window', 'ApiPath'];
function infoController(MenuService, $window, ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  if(MenuService.userInfo.length === 0) {
    $window.alert('Not Signed Up Yet. Sign up Now!');
    $ctrl.signedIn = true;
  } else {
    $ctrl.signedIn = false;
  }

  $ctrl.getInfo = function() {
    return MenuService.getUserInfo();
  }
}

})();
