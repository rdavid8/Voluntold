(function(module) {
  // creating yelp object
  var yelp = {};
// userInput method to save user input value as variables
  yelp.userInput = function (callback){
    $('#submit').on('click', function(e) {
        e.preventDefault();
        yelp.term = $('#term').val();
        yelp.location = $('#location').val();
        yelp.category = $('#category').val();
        callback();
    });
  };
// ajax call method using saved variables
  yelp.ajaxCall = function (){
    $.ajax('yelp/v2/search/', {
      data: {
        term: yelp.term,
        location: yelp.location,
        category_filter: yelp.category,
        limit: 10
      },
      success: function(data) {
        manageDB.deleteTable(function(){});
        var bus = JSON.parse(data).businesses;
        $.each(bus, function(i){
          manageDB.populateDB(bus[i])
        });
      },
      error: function() {
        console.log('There was an error');
      }
    });
  };
// when user clicks submit, run yelp.ajax as a callback function
  yelp.userInput(yelp.ajaxCall);

  module.yelp = yelp;
})(window);
