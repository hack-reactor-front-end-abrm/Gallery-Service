import React, { Component, Fragment } from 'react';
import Thumbnail from './Thumbnail.jsx'
import axios from 'axios';
import css from './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listing: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/45')
      .then(({data}) => {
        this.setState({ listing: data[0] })
      })
  }

  render() {
    const { listing } = this.state
    return (
      <div>
        {listing 
          ? <img src={listing.exterior} width={550} height={416}/> 
          : <p>Loading...</p>}
        {listing
          ? <Thumbnail image={listing.interior_1}/>
          : <p>Loading...</p>}
      </div>
    )
  }
}

export default Gallery;