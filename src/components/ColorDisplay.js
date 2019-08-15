import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorDisplay.css';

function ColorDisplay({ color }) { 
  console.log(typeof color);
  return (
    <>
    <p>Hiiiii</p>
    <div className={styles.ColorDisplay} style={{ backgroundColor: color }}></div>
    </>
  );
}

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorDisplay;
