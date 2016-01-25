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
          'sql': 'INSERT INTO articles (name, display_phone, address, city, postal_code, state_code, latitude, longitude, image_url, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
          'data': [this.name, this.display_phone, this.address, this.city, this.postal_code, this.state_code, this.latitude, this.longitude, this.image_url, this.url],
        }
      ]
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

manageDB.populateDB = function(

  module.manageDB = manageDB;
})(window);

manageDB.createTable();
