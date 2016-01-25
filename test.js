
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
