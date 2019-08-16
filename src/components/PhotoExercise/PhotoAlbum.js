import React from 'react';
import PropTypes from 'prop-types';
// import Photo from './Photo'; we might not need?
import Photos from './Photos';
import styles from './PhotoAlbum.css';

function PhotoAlbum({ title, photos }) {
  return (
    <section className={styles.PhotoAlbum}>
      <h3>{title}</h3>
      <Photos photos={photos} />
    </section>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
