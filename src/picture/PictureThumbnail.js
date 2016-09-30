import React from 'react';

export default class PictureThumbnail extends React.Component {
  render() {
    return (
      <div className="c-picture-thumbnail" onClick={this.props.onClick}>
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
};