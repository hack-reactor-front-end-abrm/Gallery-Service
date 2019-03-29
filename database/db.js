/*
const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/database.sqlite'
})

const images = require('./images.js')

const randomImage = (array) => array[(Math.floor((array.length) * Math.random() ))]

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to Sequelize database")
})

const Listing = sequelize.define('Listing', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  exterior: Sequelize.STRING,
  interior_1: Sequelize.STRING,
  interior_2: Sequelize.STRING,
  interior_3: Sequelize.STRING,
  interior_4: Sequelize.STRING,
  interior_5: Sequelize.STRING,
  interior_6: Sequelize.STRING,
  interior_7: Sequelize.STRING,
  interior_8: Sequelize.STRING,
  interior_9: Sequelize.STRING
})


for (let i = 0; i < 100; i++) {
  Listing.create({
    exterior: randomImage(images.exteriors),
    interior_1: randomImage(images.interors),
    interior_2: randomImage(images.interors),
    interior_3: randomImage(images.interors),
    interior_4: randomImage(images.interors),
    interior_5: randomImage(images.interors),
    interior_6: randomImage(images.interors),
    interior_7: randomImage(images.interors),
    interior_8: randomImage(images.interors),
    interior_9: randomImage(images.interors)
  })
}

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Sequelize Synced!")
  })
*/