(function(module) {
  // creating yelp object
  var yelp = {};
  yelp.all = [];

  yelp.ajaxCall = function (callback) {
    $.ajax('yelp/v2/search/', {
      data: {
        term: questionsController.term,
        location: questionsController.location,
        category_filter: 'nonprofit',
        limit: 10
      },
      success: function(data) {
        localStorage.clear(); // Clear out all old local storage data
        if(JSON.parse(data).businesses) { //if data has results do below
          yelp.averageLocationHandler(data, yelp.handleData);
        }
      },
      error: function() {
        console.log('There was an error');
      }
    }).done(callback);
  };

  yelp.averageLocationHandler = function(data, cb) {
    var averageLoc = {
      lat: JSON.parse(data).region.center.latitude,
      long: JSON.parse(data).region.center.longitude
    };
    localStorage.setItem('averageLoc', JSON.stringify(averageLoc));
    cb(data);
  };

  yelp.handleData = function(data) {
    var bus = JSON.parse(data).businesses; //variable bus now houses business objects.
    $.each(bus, function(i){ // for every business in object. run this function
      manageDB.populateDB(bus[i]); // Populate DB with each business obj to be stored in yelp.all, once done obj array will be filled.
    });
    localStorage.setItem('yelpInfo', JSON.stringify(yelp.all)); // put the array into local storage.
  };

  module.yelp = yelp;
})(window);
