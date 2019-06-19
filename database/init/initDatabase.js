const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../listings.sqlite');

db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS listings`);
  db.run(`
    CREATE TABLE IF NOT EXISTS listings (
      id INTEGER NOT NULL,
      exterior VARCHAR(100),
      google_maps VARCHAR(100) NOT NULL,
      google_street VARCHAR(100) NOT NULL,
      interior_1 VARCHAR(100) NOT NULL,
      interior_2 VARCHAR(100) NOT NULL,
      interior_3 VARCHAR(100) NOT NULL,
      interior_4 VARCHAR(100) NOT NULL,
      interior_5 VARCHAR(100) NOT NULL,
      interior_6 VARCHAR(100) NOT NULL,
      interior_7 VARCHAR(100) NOT NULL,
      interior_8 VARCHAR(100),
      interior_9 VARCHAR(100),
      PRIMARY KEY (id)
     )`);
});

db.close();
