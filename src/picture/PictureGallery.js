import React from 'react';
import { connect } from 'react-redux';
import PictureThumbnail from './PictureThumbnail';
import LightboxContainer from '../lightbox/Lightbox';

import { fetchPictures, selectPicture } from './picture.actions';

@connect(store => ({
  pictures: store.pictures
}))
export default class PictureGallery extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchPictures());
  }

  handleClick(idx) {
    this.props.dispatch(selectPicture(idx));
  }

  render() {
    let loadingMessage = null;
    let pictures = this.props.pictures;
    let selectedPicture = pictures.pictures[this.props.pictures.selectedIdx];

    window.onscroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100 && !pictures.fetching) {
        this.props.dispatch(fetchPictures({page: pictures.pages + 1}))
      }
    };

    if (this.props.pictures.fetching) {
      loadingMessage = (
        <div className="c-loading-disclaimer">
          <span>Loading pictures...</span>
        </div>
      );
    }
    
    return (
      <div className="c-picture-gallery">
        {this.props.pictures.pictures.map((picture, idx) => <PictureThumbnail onClick={this.handleClick.bind(this, idx)} src={picture.webformatURL} alt={picture.tags} key={idx}/>)}
        {loadingMessage}
        {selectedPicture && <LightboxContainer />}
      </div>
    );
  }
};