$.ajax('yelp/v2/search/', {
  data: {
    term: 'tacos',
    location: 'Everett'
  },
  success: function(data) {
    console.log(data);
  },
  error: function() {
    console.log('There was an error');
  }
});
