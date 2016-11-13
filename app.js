(function() {
  'use strict';
  angular.module('LaunchCheck', [])
  .controller('LaunchCheckController',LaunchCheckController);
  LaunchCheckController.$inject = ['$scope'];
  function LaunchCheckController($scope) {
    $scope.launchMenu = "";
    $scope.placeholder = "list comma separated dishes you usually have for lunch";
    $scope.message = "";
    $scope.checkIfTooMuch = function() {
      if ($scope.launchMenu === "") {
        $scope.message = "Please enter data first";
      }
      else {
        var tempArray = $scope.launchMenu.split(",");
        if (tempArray.length > 3) {
          $scope.message = "Too much!";
        }
        else {
          $scope.message = "Enjoy!";
        }
      }
    }
  }
})();
