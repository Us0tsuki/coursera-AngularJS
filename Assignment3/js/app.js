(function(){
  "use strict";
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', foundItems);

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {
      return $http({url: "https://davids-restaurant.herokuapp.com/menu_items.json"})
        .then(function(result) {
          var menu_items = result.data.menu_items;
          var foundItems = [];
          for(var i = 0; i < menu_items.length; i++) {
            if(menu_items[i].description.indexOf(searchTerm) !== -1) {
              foundItems.push(menu_items[i]);
            }
          }
          return foundItems;
        })
    }
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.ifClicked = false;
    ctrl.getMatchedMenuItems = function() {
      ctrl.found = null;
      ctrl.ifClicked = true;
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(result) {
        ctrl.found = result;
        ctrl.ifClicked = false;
      });
    };

    ctrl.removeItem = function(index) {
      // console.log("remove!");
      ctrl.found.splice(index, 1);
    }
  }

  function foundItems() {
    var ddo = {
      templateUrl: 'itemsloaderindicator.template.html',
      // templateUrl: "../loader/itemsloaderindicator.template.html",
      scope: {
        ifClicked: '<',
        items: '<',
        onRemove: '&'
      },
      controller: foundItemsDirectiveController,
      controllerAs: 'dirCtrl',
      bindToController: true
    }
    return ddo;
  }

  function foundItemsDirectiveController() {

  }
})();
