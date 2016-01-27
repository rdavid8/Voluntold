(function(module) {

  manageDB = {};



  function Location (arr) {
    this.name = arr[0] || '',
    this.display_phone = arr[1] || '',
    this.address = arr[2] || '',
    this.city = arr[3] || '',
    this.postal_code = arr[4] || '',
    this.state_code = arr[5] || '',
    this.latitude = arr[6] || '',
    this.longitude = arr[7] || '',
    this.image_url = arr[8] || 'img/marker100.png',
    this.url = arr[9] || ''
  }

  Location.prototype.insertSelf = function() {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO yelpresults (name, display_phone, address, city, postal_code, state_code, latitude, longitude, image_url, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
          'data': [this.name, this.display_phone, this.address, this.city, this.postal_code, this.state_code, this.latitude, this.longitude, this.image_url, this.url],
        }
      ]
    );
  };
  manageDB.deleteTable = function(callback) {
    webDB.execute(
      'DELETE FROM yelpresults;',
      callback
    );
  };
  manageDB.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS yelpresults (' +
        'id INTEGER PRIMARY KEY, ' +
        'name VARCHAR(255) NOT NULL, ' +
        'display_phone VARCHAR(255) NOT NULL, ' +
        'address VARCHAR (255), ' +
        'city VARCHAR(30), ' +
        'postal_code VARCHAR(15), ' +
        'state_code VARCHAR(2), ' +
        'latitude FLOAT(255), ' +
        'longitude FLOAT(255), ' +
        'image_url VARCHAR(255), ' +
        'url VARCHAR(255));',
        callback
    );
  };
manageDB.latRep = function(x){
  if (x) {
    return x.latitude;
  } else {
    return undefined;
  }
}
manageDB.longRep = function(x){
  if (x) {
    return x.longitude;
  } else {
    return undefined;
  }
}
manageDB.populateDB = function(bus){
  var arr=[bus.name, bus.display_phone, bus.location.address[0], bus.location.city, bus.location.postal_code, bus.location.state_code, manageDB.latRep(bus.location.coordinate), manageDB.longRep(bus.location.coordinate), bus.image_url, bus.url];
  var thisLoc = new Location(arr);
  thisLoc.insertSelf(); //Insert self into SQL
};

Location.grabLocs = function(rows){
  Location.all = rows; //Load up the rows
}
Location.html = function(obj) {
  var template = Handlebars.compile($('#result-template').text());
  console.log("this is the obj in Location:html " + obj);
  // this.display_phone =
  // this.address =
  // this.city =
  // this.postal_code =
  // this.state_code =
  // this.image_url =
  // this.url =
  return template(obj);

};
Location.loadAll = function() {
  webDB.execute('SELECT * FROM yelpresults', function(rows){ //Select everything in SQL database
      if(!rows.length){ //If there are rows in the DB do the following:
        var $aTag = $('<a></a>').attr('href', 'noresults');
        var $divTag = $('<div></div>').attr('id', 'errorclick');
        $('body').prepend($aTag);
        $aTag.append($divTag);
        $('#errorclick').trigger('click');
        $aTag.remove();
      } else {
        Location.grabLocs(rows);
        var center = {lat: Location.all[0].latitude, lng: Location.all[0].longitude}; //This will be passed to map.
        initMap(center);
        $('#sidebar').empty();
        $.map(Location.all, function(obj){
          setTimeout(function(){
            createMarkers(obj) // Create map marker per each in the array.
          }, obj.id * 250)
          $('#sidebar').append(Location.html(obj));

        })
        //display no results
      }
  })
}

Location.all = [];

  module.Location = Location;
  module.manageDB = manageDB;
})(window);

manageDB.createTable();
