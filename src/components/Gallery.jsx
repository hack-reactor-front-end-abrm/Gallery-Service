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
    return (  
      <div>
        {console.log("here it is ", this.state.listing)}
        {/* <img src={this.state.listing[0].exterior}/>    */}
        <p>Hello World</p>
      </div>
    )
  }
}

export default Gallery;