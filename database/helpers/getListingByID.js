const Listing = require('../index.js');

module.exports = async id => {
  const listing = await Listing.findOne({ where: { id } });

  return listing;
};
