import React from 'react';
import PropTypes from 'prop-types';

function Flower({ name, color, meaning }) {
  return (
    <p>
      <h3>{name}</h3>
      <ul>
        <li>Color: {color}</li>
        <li>Meaning: {meaning}</li>
      </ul>
    </p>
  );
}

Flower.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  meaning: PropTypes.string
};
export default Flower;
