
var yelp = {};

yelp.userInput = function (){
  $('#submit').on('click', function(e) {
      e.preventDefault();
      yelp.term = $('#term').val();
      yelp.location = $('#location').val();
      yelp.category = $('#category').val();
  });
};

yelp.userInput();


$.ajax('yelp/v2/search/', {
  data: {
    term: 'animal shelter',
    location: '98023',
    category_filter: 'nonprofit',
    limit: 10
  },
  success: function(data) {
    var bus = JSON.parse(data).businesses;
    console.log(bus)
    $.each(bus, function(i){
      console.log(bus[i].location.city + ' - ' + bus[i].name +': '+ bus[i].phone)
    });
  },
  error: function() {
    console.log('There was an error');
  }
});
