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
          var foundItems = [];
          if(!searchTerm) {
            return foundItems;
          }
          searchTerm = searchTerm.toLowerCase();
          var menu_items = result.data.menu_items;
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
    ctrl.searchTerm = "";
    ctrl.getMatchedMenuItems = function() {
      ctrl.ifClicked = true;
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(result) {
        ctrl.found = result;
        ctrl.ifClicked = false;
      });
    };

    ctrl.removeItem = function(index) {
      ctrl.found.splice(index, 1);
    }
  }

  function foundItems() {
    var ddo = {
      templateUrl: "loader/itemsloaderindicator.template.html",
      scope: {
        ifClicked: '<',
        items: '<',
        onRemove: '&'
      },
    }
    return ddo;
  }
})();
