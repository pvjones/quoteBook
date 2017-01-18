angular.module('quoteBook').controller('mainController', function($scope, mainService) {

  $scope.getAllQuotes = mainService.getAllQuotes;

  $scope.quotes = $scope.getAllQuotes();

  $scope.addQuote = function(text, author) {
    mainService.addQuote(text, author);
    $scope.text = '';
    $scope.author = '';
  };

  $scope.removeQuote = mainService.removeQuote;

  $scope.restoreDeleted = mainService.restoreDeleted;

});