import React from 'react';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="slideshow-container">
        {this.props.listings.map((listing, i) => (
          <div key={i} className={listing.thumbnailWidth === 550 ? 'large-tile' : 'small-tile'}>
            <img
              onClick={e => this.props.openLightbox(i, e)}
              src={listing.src}
              width={listing.thumbnailWidth}
              height={listing.thumbnailHeight}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Slideshow;
