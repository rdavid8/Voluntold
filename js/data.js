(function(module) {

  manageDB = {};

  manageDB.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS latest-results (' +
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
        'url VARCHAR(255);',
      callback
    );
  };






  module.manageDB = manageDB;
})(window);
