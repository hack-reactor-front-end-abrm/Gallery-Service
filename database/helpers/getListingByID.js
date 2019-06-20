const Listing = require("../index.js");

module.exports = async id => {
  try {
    return await Listing.findOne({ where: { id } });
  } catch (err) {
    console.log("Ahh! Heres an error ", err);
  }
};
