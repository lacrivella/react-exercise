import React from 'react';
import PropTypes from 'prop-types';

function Photo({ photo }) {
//image src tag
  return <img src={photo} alt="raccoons are adorable"/>;
}

Photo.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default Photo;
