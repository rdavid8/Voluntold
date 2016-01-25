$.ajax('yelp/v2/search/', {
  data: {
    term: 'Bakery',
    location: 'Federal Way'
  },
  success: function(data) {
    console.log(data);
  },
  error: function() {
    console.log('There was an error');
  }
});
