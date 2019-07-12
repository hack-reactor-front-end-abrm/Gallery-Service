const Listing = require("../index.js");

module.exports = (...args) => {
  return Listing.create({
    ...args
  });
};
