import React, { Component } from 'react';
import styles from './ColorPicker.css';

export default class ColorPicker extends Component {
  state = {
    color: ''
  };

  colorClick = color => {
    this.setState({ color });
  }

  render() {
    return (
      <section className={styles.ColorPicker}>
        <button className={styles.titian} onClick={()=> this.colorClick('titian')}>Titian</button>
        <button className={styles.saffron} onClick={()=> this.colorClick('saffron')}>Saffron</button>
        <button className={styles.viridian} onClick={()=> this.colorClick('viridian')}>Viridian</button>
        <button className={styles.prussian} onClick={()=> this.colorClick('prussian')}>Prussian</button>
        <div className={styles[this.state.color]}></div>
      </section>
    );
  }
}
