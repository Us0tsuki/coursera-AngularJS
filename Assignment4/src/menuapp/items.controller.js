(function () {
'use strict';

angular.module('MenuApp')
.controller('itemsController', itemsController);

itemsController.$inject = ['menuItems'];
function itemsController(menuItems) {
  var ic = this;
  console.log(menuItems.data)
  ic.menuItems = menuItems.data;
}

})();
