const db = require('./sqlite.js');

const getDataFromDatabase = callback => {
  db.all(`SELECT * FROM gallery`, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, results);
    }
  });
};

const getListingByID = (id, callback) => {
  db.all(`SELECT * from gallery where id = ${id}`, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, results);
    }
  });
};

console.log('utils.js is being ran');

module.exports.getDataFromDatabase = getDataFromDatabase;
module.exports.getListingByID = getListingByID;
