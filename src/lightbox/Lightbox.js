import React from 'react';
import { connect } from 'react-redux';

import { deselectPicture, changePicture } from '../picture/picture.actions';

@connect(store => ({
  pictures: store.pictures
}))
export default class LightboxContainer extends React.Component {
  closeLightbox() {
    this.props.dispatch(deselectPicture());
  }

  changePicture(idx) {
    this.props.dispatch(changePicture(idx));
  }

  render() {
    let index = this.props.pictures.selectedIdx;
    let picture = this.props.pictures.pictures[index];
    
    return <Lightbox
      src={picture.webformatURL}
      alt={picture.tags}
      next={this.changePicture.bind(this, index + 1)}
      previous={this.changePicture.bind(this, index - 1)}
      close={this.closeLightbox.bind(this)}/>
  }
};

var Lightbox = props => (
<div className="c-selected__overlay">
  <div className="c-selected__container">
    <img src={props.src} alt={props.alt} />
    <div className="overlay-controls">
      <span className="overlay-control__back" onClick={props.previous}>&lt; Previous</span>
      <span className="overlay-control__close" onClick={props.close}>Close</span>
      <span className="overlay-control__forward" onClick={props.next}>Next &gt;</span>
    </div>
  </div>
</div>
);

export { Lightbox };
