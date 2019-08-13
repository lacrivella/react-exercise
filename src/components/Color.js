import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex, rgb }) {
  const rgb = {
    r: 129,
    g: 68,
    b: 75
  };
  const hex = '#3B444B';
  
  const styles = {
    backgroundColor: hex,
    width: '0.8rem',
    height: '0.8rem',
    display: 'inline-block'
  };
  
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}<div style={styles}></div></dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>
        <p>red: {rgb.red}</p>
        <p>green: {rgb.green}</p>
        <p>blue: {rgb.blue}</p>
      </dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string,
  rgb: PropTypes.shape({
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired
  })
};
export default Color;
