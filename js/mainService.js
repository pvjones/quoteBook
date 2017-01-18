angular.module('quoteBook').service('mainService', function() {

  var quotes = [{
    text: 'Life isn\'t about getting and having, it\'s about giving and being.',
    author: 'Kevin Kruse'
  }, {
    text: 'Whatever the mind of man can conceive and believe, it can achieve',
    author: 'Napoleon Hill'
  }, {
    text: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein'
  }, {
    text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.',
    author: 'Robert Frost'
  }, {
    text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
    author: 'Amelia Earhart'
  }, {
    text: 'Life is what happens to you while you\'re busy making other plans.',
    author: 'John Lennon'
  }, {
    text: 'What even is a jQuery?',
    author: 'Tyler S. McGinnis'
  }];

  var archivedQuotes = [];

  // Check local storage and rewrite arrays if it exists

  (function getStorage() {
    if (localStorage.getItem("quotes")) {
      quotes = JSON.parse(localStorage.getItem("quotes"))
    };

    if (localStorage.getItem("archivedQuotes")) {
      archivedQuotes = JSON.parse(localStorage.getItem("archivedQuotes"))
    };

  })();

  // Provide quotes to controller

  this.getAllQuotes = function() {
    return quotes;
  };

  // Allow adding and deleting quotes

  this.addQuote = function(text, author) {
    if (text && author) {
      var newQuote = {
        text: text,
        author: author
      };
      quotes.unshift(newQuote);
    };
    //storage time!
    if (typeof(Storage) !== "undefined") { //check if it's available
      localStorage.setItem("quotes", JSON.stringify(quotes))
    };

  };

  this.removeQuote = function(quote) {
    archivedQuotes.unshift(quotes.splice(quotes.indexOf(quote), 1));

    if (typeof(Storage) !== "undefined") { //check if it's available
      localStorage.setItem("quotes", JSON.stringify(quotes))
    };
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("archivedQuotes", JSON.stringify(archivedQuotes))
    };

    console.log(archivedQuotes)

  };

  // Allow restoring archived quotes

  this.restoreDeleted = function() {
    if (archivedQuotes) {
      for (var i = 0; i < archivedQuotes.length; i++) {
        quotes.unshift(archivedQuotes[i]);
      }
    };
    if (typeof(Storage) !== "undefined") { //check if it's available
      localStorage.setItem("quotes", JSON.stringify(quotes))
    };
    archivedQuotes = [];
  };



});