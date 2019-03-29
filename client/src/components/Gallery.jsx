import React, { Component } from 'react';
import axios from 'axios';

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listing: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/45')
      .then(({data}) => {
        this.setState({ listing: data })
      })
  }

  render() {

    const { listing } = this.state
    
    return (
      <div>
        {listing ? <img src={listing[0].exterior}/> : <p>Loading...</p>}
      </div>
    )
  }
}

export default Gallery;