const createListing = require('../helpers/createListing.js');
const randomImage = require('../helpers/randomImage.js');
const images = require('../images.js');

(async () => {
  try {
    const { exteriors, interiors } = images;
    for (let i = 0; i < 100; i++) {
      await createListing(
        randomImage(exteriors),
        'https://storage.googleapis.com/zillow-listing-pictures/googlemaps_static.png',
        'https://storage.googleapis.com/zillow-listing-pictures/googlestreet_static.jpeg',
        randomImage(interiors),
        randomImage(interiors),
        randomImage(interiors),
        randomImage(interiors),
        randomImage(interiors),
        randomImage(interiors),
        randomImage(interiors),
        randomImage(interiors),
        randomImage(interiors)
      );
    }
  } catch (err) {
    console.log('Ahh! err ', err);
  }
})();
