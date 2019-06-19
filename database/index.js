const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../listings.sqlite'
});

const Listing = require('./models/Listing.js')(sequelize, Sequelize);

module.exports = Listing;
