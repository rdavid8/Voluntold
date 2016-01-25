(function(module) {

  manageDB = {};



  function Location (arr) {
    this.name = arr[0],
    this.display_phone = arr[1],
    this.address = arr[2],
    this.city = arr[3],
    this.postal_code = arr[4],
    this.state_code = arr[5],
    this.latitude = arr[6],
    this.longitude = arr[7],
    this.image_url = arr[8],
    this.url = arr[9]
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
  var arr=[bus.name, bus.display_phone, bus.location.address[0], bus.location.city, bus.location.postal_code, bus.location.state_code, manageDB.latRep(bus.location.coordinate), manageDB.longRep(bus.location.coordinate), bus.image_url, bus.url]
  console.log(arr);
  var thisLoc = new Location(arr);
  thisLoc.insertSelf();
};

Location.grabLocs = function(rows){
  Location.all = rows;
}

Location.loadAll = function() {
  webDB.execute('SELECT * FROM yelpresults', function(rows){
      if(rows.length){
        console.log("hello!");
        Location.grabLocs(rows);
      }
  })
}

Location.all = [];

  module.Location = Location;
  module.manageDB = manageDB;
})(window);

manageDB.createTable();
Location.loadAll();
