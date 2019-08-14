import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Color extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.shape({
      red: PropTypes.number.isRequired,
      green: PropTypes.number.isRequired,
      blue: PropTypes.number.isRequired
    })
  }
  render() {
    const { name, hex, rgb } = this.props;
    
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
}


