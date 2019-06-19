const db = require('./db.js').initDB();

module.exports.getDataFromDatabase = callback => {
  db.all(`SELECT * FROM gallery`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports.getListingByID = (id, callback) => {
  db.all(`SELECT * from gallery where id = ${id}`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, results);
    }
  });
};
