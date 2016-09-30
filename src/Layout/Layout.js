import React from 'react';
import PictureGalleryContainer from  '../picture/PictureGallery';

let Layout = () => (
  <div className="c-layout">
    <div className="c-layout__title">
      <h1>Pictures of Puppies</h1>
    </div>
    <PictureGalleryContainer />
  </div>
);

export default Layout;