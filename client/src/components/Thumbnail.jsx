import React, { Component, Fragment } from 'react';

class Thumbnail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <img src={this.props.image} width={280} height={208}/> 
      </Fragment>
    )
  }
}

export default Thumbnail;