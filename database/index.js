const Sequelize = require("sequelize");
const path = require("path");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "listings.sqlite")
});

const Listing = require("./models/Listing.js")(sequelize, Sequelize);

module.exports = Listing;
