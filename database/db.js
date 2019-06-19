const sqlite3 = require('sqlite3').verbose();
const initialize = require('./init.js');

let _db;

const initDB = () => {
  if (_db) {
    return _db;
  } else {
    _db = new sqlite3.Database('./database/images.sqlite');
    initialize(_db);
    return _db;
  }
};

module.exports = { initDB };
