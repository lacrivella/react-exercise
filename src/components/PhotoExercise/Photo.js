import React from 'react';
import PropTypes from 'prop-types';

function Photo({ url, alt }) {
//image src tag
  return <img src={url} alt={alt}/>;
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Photo;
