(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.userInfo = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.saveUserInfo = function(first_name, last_name, email, phone, favorite) {
    return $http.get(ApiPath + '/menu_items/' + favorite + '.json').then(
      function (response) {
        var user = {}
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.phone = phone;
        user.item = response.data;
        service.userInfo.push(user);
      }
    );
  }

  service.getUserInfo = function() {
    return service.userInfo;
  }
}



})();
