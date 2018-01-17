(function() {
'use strict'
angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController)
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.message = "";
  $scope.showMessage = function() {
    var itemArray = $scope.items.split(',');
    var count = itemArray.length;
    for (var i = 0; i < itemArray.length; i ++) {
      if (itemArray[i] == "" || itemArray[i] == " ") {
        count --;
      }
    }
    if ($scope.items == "") {
      $scope.message = "Please enter data first";
      $scope.borderColor  = {"border-color": "red"};
      $scope.fontColor = {"color": "red"};
    } else if(count <= 3) {
      $scope.message = "Enjoy!";
      $scope.borderColor  = {"border-color": "green"};
      $scope.fontColor = {"color": "green"};
    } else {
      $scope.message = "Too much!";
      $scope.borderColor  = {"border-color": "green"};
      $scope.fontColor = {"color": "green"};
    }
  }
}
})();
