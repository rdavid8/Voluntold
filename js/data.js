(function(module) {

  manageDB = {};

  function Location (arr) {
    this.name = arr[0] || '', // '' avoids undefined
    this.display_phone = arr[1] || '',
    this.address = arr[2] || '',
    this.city = arr[3] || '',
    this.postal_code = arr[4] || '',
    this.state_code = arr[5] || '',
    this.latitude = arr[6] || '',
    this.longitude = arr[7] || '',
    this.image_url = arr[8] || 'img/marker100.png',
    this.url = arr[9] || '';
  }
  Location.prototype.insertSelf = function() {
    yelp.all.push(this);
  };

  manageDB.latRep = function(coordinate){
    if (coordinate) {
      return coordinate.latitude;
    } else {
      return undefined;
    }
  };

  manageDB.longRep = function(coordinate){
    if (coordinate) {
      return coordinate.longitude;
    } else {
      return undefined;
    }
  };

  manageDB.populateDB = function(bus){
    var arr=[bus.name, bus.display_phone, bus.location.address[0], bus.location.city, bus.location.postal_code, bus.location.state_code, manageDB.latRep(bus.location.coordinate), manageDB.longRep(bus.location.coordinate), bus.image_url, bus.url];
    var thisLoc = new Location(arr); //make an array of properties and pass it into object constructor for location.
    thisLoc.insertSelf(); //Insert self into LS
  };

  Location.grabLocs = function(){
    Location.all = JSON.parse(localStorage.getItem('yelpInfo')); //Load up the locs from LS
  };

  Location.html = function(obj) {
    var template = Handlebars.compile($('#result-template').text());
    return template(obj);
  };

  Location.prepResults = function(){ //callback once ajax is complete.
    var $aTag = $('<a></a>').attr('href', 'results'); //creating aTag. routing without using window location
    var $divTag = $('<div></div>').attr('id', 'clicker');
    $('body').prepend($aTag);
    $aTag.append($divTag);
    $('#clicker').trigger('click');
    $aTag.remove();
  };

  Location.handleResults = function(rows) {
    Location.showMapArea();
    Location.grabLocs(); //handles from ls
    Location.initMap();
    Location.displayLocs();
  };

  Location.handleNoResults = function() {
    var $aTag = $('<a></a>').attr('href', 'noresults'); //creating another route to no results page
    var $divTag = $('<div></div>').attr('id', 'errorclick');
    $('body').prepend($aTag);
    $aTag.append($divTag);
    $('#errorclick').trigger('click');
    $aTag.remove();
  };

  Location.showMapArea = function() {
    $('#map').addClass('animated fadeIn').show();
    $('#sidebar').addClass('animated fadeInRight').show();
    $('#bg3').addClass('animated fadeOut');
    $('#shade').addClass('animated fadeOut');
    $('#landing').hide();
  };

  Location.initMap = function() {
    var averageLoc = JSON.parse(localStorage.getItem('averageLoc'));
    var center = {lat:  averageLoc.lat, lng: averageLoc.long}; //This will be passed to map.
    initMap(center);
  };

  Location.displayLocs = function() {
    $('#sidebar').empty();
    $.map(Location.all, function(obj){ //
      setTimeout(function(){
        createMarkers(obj); // Create map marker per each in the array.
      }, obj.id * 250);
      $('#sidebar').append(Location.html(obj)); //adding objects into sidebar.
    });
  };

  Location.popRes = function(){
    if(!localStorage.getItem('yelpInfo')){
      Location.handleNoResults();
    } else {
      Location.handleResults();
    }
  };

  Location.loadAll = function() {
    if(back){
      window.location = '/';
    } else {
      back = true;
      Location.popRes();
    }
  };

  Location.all = [];
  module.Location = Location;
  module.manageDB = manageDB;
})(window);
