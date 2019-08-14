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
        <h1>select a color</h1>
        <button className={styles.cerise} onClick={()=> this.colorClick('cerise')}>Cerise</button>
        <button className={styles.saffron} onClick={()=> this.colorClick('saffron')}>Saffron</button>
        <button className={styles.viridian} onClick={()=> this.colorClick('viridian')}>Viridian</button>
        <button className={styles.capri} onClick={()=> this.colorClick('capri')}>Capri</button>
        <div className={styles[this.state.color]}></div>
      </section>
    );
  }
}
