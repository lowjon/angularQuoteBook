angular.module('quoteBook').controller('MainCtrl', function ($scope, mainService) {


  $scope.test = 'DURP';
  $scope.getQuote = function () {
    $scope.quotes = mainService.getQuote();
  }

  $scope.addQuote =function () {
     $scope.quotes = mainService.addQuote($scope.newQuote);
  }

  $scope.rmQuote = function ($index) {
    $scope.quotes = mainService.rmQuote($index);
    console.log($index);
  }


  $scope.getQuote();




});
