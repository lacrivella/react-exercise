import React from 'react';
import PropTypes from 'prop-types';

function Cat({ name, breed, color }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Breed</dt>
      <dd>{breed ? breed : 'unknown'}</dd>

      <dt>Fur Color</dt>
      <dd>{color}</dd>
    </dl>
  );
}

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string,
  color: PropTypes.string.isRequired
};
export default Cat;
