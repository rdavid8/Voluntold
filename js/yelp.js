(function(module) {
  // creating yelp object
  var yelp = {};
// userInput method to save user input value as variables
  // yelp.userInput = function (callback){
  //   $('#submit').on('click', function(e) {
  //       e.preventDefault();
  //       yelp.term = $('#term').val();
  //       yelp.location = $('#location').val();
  //       yelp.category = $('#category').val();
  //       callback();
  //   });
  // };
// ajax call method using saved variables
  yelp.ajaxCall = function (callback) {
    $.ajax('yelp/v2/search/', {
      data: {
        term: questionsController.term,
        location: questionsController.location,
        category_filter: 'nonprofit',
        limit: 10
        // radius_filter = 15,
      },
      success: function(data) {
        manageDB.deleteTable(function(){}); // Delete any previous data in database so we can fill it up again.
        if(JSON.parse(data).businesses) {
          console.log("businesses exisit");
          var bus = JSON.parse(data).businesses; //variable bus now houses business objects.
          $.each(bus, function(i){
            manageDB.populateDB(bus[i]) // Populate DB with each business obj
          });
        }
      },
      error: function() {
        console.log('There was an error');
      }
    }).done(callback)
  };
// when user clicks submit, run yelp.ajax as a callback function
// yelp.userInput(yelp.ajaxCall);

  module.yelp = yelp;
})(window);
