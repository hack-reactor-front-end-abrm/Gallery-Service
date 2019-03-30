import React, { Component, Fragment } from 'react';
import css from './Gallery.css';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          src={this.props.image[1]}
          className={this.props.image[0] === 'exterior' ? 'large-tile' : 'small-tile'}
        />
      </div>
    );
  }
}

export default Thumbnail;
