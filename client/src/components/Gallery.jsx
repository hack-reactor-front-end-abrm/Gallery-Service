import React, { Component, Fragment } from 'react';
import Thumbnail from './Thumbnail.jsx';
import axios from 'axios';
import css from './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: null
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/45').then(({ data }) => {
      this.setState({ listing: Object.entries(data[0]) });
    });
  }

  render() {
    const { listing } = this.state;
    return (
      <div className="container">
        {listing ? (
          listing.map((listing, k) => {
            if (listing[0] !== 'id') {
              return <Thumbnail key={k} image={listing} />;
            }
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Gallery;
