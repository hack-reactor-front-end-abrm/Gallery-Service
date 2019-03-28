import React, { Component } from 'react';
import axios from 'axios';

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listing: null,
    }
  }

  componentDidMount() {
    axios.get('/45')
      .then(({data}) => {
        this.setState({ listing: data })
      })
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  }
}

export default Gallery;