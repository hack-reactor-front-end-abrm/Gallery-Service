const sqlite3 = require('sqlite3').verbose()
const images = require('./images.js')

let db = new sqlite3.Database('./database.sqlite')

const randomImage = (array) => array[(Math.floor((array.length) * Math.random()))]

db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS gallery`)
  db.run(`
  CREATE TABLE gallery (
    id INTEGER NOT NULL,
    exterior VARCHAR(100),
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
   )`)

  let galleryInsert = db.prepare(`
    INSERT INTO gallery (exterior, interior_1, interior_2, interior_3, interior_4, interior_5, interior_6, interior_7, interior_8, interior_9) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)

  for (let i = 0; i < 100; i++) {
    galleryInsert.run(
      randomImage(images.exteriors),
      randomImage(images.interiors),
      randomImage(images.interiors),
      randomImage(images.interiors),
      randomImage(images.interiors),
      randomImage(images.interiors),
      randomImage(images.interiors),
      randomImage(images.interiors),
      randomImage(images.interiors),
      randomImage(images.interiors)
    )
  }

  galleryInsert.finalize()

})


const getDataFromDatabase = (callback) => {
  db.all(`SELECT * FROM gallery`, (err, results) => {
    if (err) {
      console.error(err)
    } else {
      callback(null, results)
    }
  })
}

const getListingByID = (id, callback) => {
  db.all(`SELECT * from gallery where id = ${id}`, (err, results) => {
    if (err) {
      console.error(err)
    } else {
      callback(null, results)
    }
  })
}

module.exports.getDataFromDatabase = getDataFromDatabase
module.exports.getListingByID = getListingByID