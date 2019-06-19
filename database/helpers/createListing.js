const Listing = require('../index.js');

module.exports = (
  exterior,
  google_maps,
  google_street,
  interior_1,
  interior_2,
  interior_3,
  interior_4,
  interior_5,
  interior_6,
  interior_7,
  interior_8,
  interior_9
) => {
  return Listing.create({
    exterior,
    google_maps,
    google_street,
    interior_1,
    interior_2,
    interior_3,
    interior_4,
    interior_5,
    interior_6,
    interior_7,
    interior_8,
    interior_9
  });
};
