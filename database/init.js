const images = require('./images.js');
const randomImage = images => images[Math.floor(images.length * Math.random())];

module.exports = database => {
  database.serialize(() => {
    database.run(`DROP TABLE IF EXISTS gallery`);
    database.run(`
    CREATE TABLE IF NOT EXISTS gallery (
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

    const galleryInsert = database.prepare(`
      INSERT INTO gallery (exterior, google_maps, google_street, interior_1, interior_2, interior_3, interior_4, interior_5, interior_6, interior_7, interior_8, interior_9) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);

    const insertListing = () => {
      galleryInsert.run(
        randomImage(images.exteriors),
        'https://storage.googleapis.com/zillow-listing-pictures/googlemaps_static.png',
        'https://storage.googleapis.com/zillow-listing-pictures/googlestreet_static.jpeg',
        randomImage(images.interiors),
        randomImage(images.interiors),
        randomImage(images.interiors),
        randomImage(images.interiors),
        randomImage(images.interiors),
        randomImage(images.interiors),
        randomImage(images.interiors),
        randomImage(images.interiors),
        randomImage(images.interiors)
      );
    };

    for (let i = 0; i < 100; i++) {
      insertListing();
    }

    galleryInsert.finalize();
  });

  database.close();
};
