import React, { Component } from 'react';
import styles from 'src/components/ColorButton.css';
import PropTypes from 'prop-types';

export default class ColorButton extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired
  }
  clickColor = color => {
    console.log(color);
  }

  render() {
    const { colors } = this.props;
    const colorElements = colors.map(color => {
      return (
        <button className={styles[color]} onClick={() => this.clickColor(color)}>{color}</button>
      )
    })
    return (
      <section className={styles.ColorButton}>
        {colorElements}
      </section>
    );
  } 
}