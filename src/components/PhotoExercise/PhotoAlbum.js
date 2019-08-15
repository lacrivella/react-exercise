import React from 'react';
import PropTypes from 'prop-types';
// import Photo from './Photo'; we might not need?
import Photos from './Photos';

function PhotoAlbum({ title, photos }) {
  return (
    <>
    <h3>{title}</h3>
    <Photos photos={photos} />
    </>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
