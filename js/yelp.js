(function(module) {
  // creating yelp object
  var yelp = {};

  yelp.ajaxCall = function (callback) {
    $.ajax('yelp/v2/search/', {
      data: {
        term: questionsController.term,
        location: questionsController.location,
        category_filter: 'nonprofit',
        limit: 10
      },
      success: function(data) {
        manageDB.deleteTable(function(){}); // Delete any previous data in database so we can fill it up again.
        if(JSON.parse(data).businesses) { //if data has results do below
          localStorage.clear();
          var averageLoc = {
            lat: JSON.parse(data).region.center.latitude,
            long: JSON.parse(data).region.center.longitude
          };
          localStorage.setItem('averageLoc', JSON.stringify(averageLoc));
          console.log(JSON.parse(data));
          var bus = JSON.parse(data).businesses; //variable bus now houses business objects.
          $.each(bus, function(i){ // for every business in object. run this function
            manageDB.populateDB(bus[i]); // Populate DB with each business obj
          });
        }
      },
      error: function() {
        console.log('There was an error');
      }
    }).done(callback);
  };
  module.yelp = yelp;
})(window);
