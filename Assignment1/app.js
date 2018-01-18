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
      //if (itemArray[i] == "" || itemArray[i] == " ") { // This doesn't take into consideration that the input is multiple(>=2) spaces('   ')
      if(itemArray[i].match(/^\s*$/)){ //use regular expression to solve this problem
      // another alternative:
      // if(jQuery.trim(itemArray[i]).length == 0){ //If you can solve the problem within JS easily, it doesn't make sense to import other dictionaries
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
