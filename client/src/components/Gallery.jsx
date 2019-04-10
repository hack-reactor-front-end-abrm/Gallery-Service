import React, { Component } from 'react';
import axios from 'axios';
import NavBarOne from './NavBarOne.jsx';
import NavBarTwo from './NavBarTwo.jsx';
import NavBarThree from './NavBarThree.jsx';
import Slideshow from './Slideshow.jsx';
import Lightbox from 'react-images';
import css from './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      path: window.location.href.substring(22)
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  componentDidMount() {
    const { path } = this.state;
    axios
      .get(`http://18.221.157.2:80/api/${path}`)
      // .get(`http://localhost:3000/api/${path}`)
      .then(({ data }) => {
        return Object.entries(data[0])
          .filter(listing => listing[0] !== 'id')
          .map(([type, url]) => {
            if (type === 'exterior') {
              return {
                src: url,
                thumbnail: url,
                thumbnailWidth: 550,
                thumbnailHeight: 416,
                caption: '$805,000 (2 beds, 2 baths, 989 sqft)'
              };
            } else {
              return {
                src: url,
                thumbnail: url,
                thumbnailWidth: 278,
                thumbnailHeight: 206,
                caption: '$805,000 (2 beds, 2 baths, 989 sqft)'
              };
            }
          });
      })
      .then(formattedListings => {
        this.setState({ listings: formattedListings });
      });
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index
    });
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;
    this.gotoNext();
  }

  render() {
    const { listings } = this.state;

    return (
      <>
        <div className="navbar-container">
          <NavBarOne />
          <NavBarTwo />
          <NavBarThree />
        </div>
        <Slideshow listings={listings} openLightbox={this.openLightbox} />
        <Lightbox
          images={listings}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          preventScroll={this.props.preventScroll}
          showThumbnails={this.props.showThumbnails}
          spinner={this.props.spinner}
          spinnerColor={this.props.spinnerColor}
          spinnerSize={this.props.spinnerSize}
          theme={this.props.theme}
        />
      </>
    );
  }
}

export default Gallery;
