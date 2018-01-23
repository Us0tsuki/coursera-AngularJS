(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;
  list1.items = ShoppingListCheckOffService.toBuyItems;
  list1.checkOff = function(index) {
    ShoppingListCheckOffService.checkOff(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;
  list2.items = ShoppingListCheckOffService.alreadyBoughtItems;
}

function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  service.toBuyItems = [
    {name: 'cookies', quantity: 5},
    {name: 'apples', quantity: 3},
    {name: 'drones', quantity: 10},
    {name: 'Macs', quantity: 2},
    {name: 'iPhones', quantity: 4},
    {name: 'Bikes', quantity: 2}
  ];
  service.alreadyBoughtItems = [];
  service.checkOff = function (index) {
    service.alreadyBoughtItems.push(service.toBuyItems.splice(index, 1)[0]);
  };
}

})();
