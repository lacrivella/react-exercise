import React, { Component } from 'react';
import styles from './ColorPicker.css';

export default class ColorPicker extends Component {
  render() {
    return (
      <section className={styles.ColorPicker}>
        <h1>select a color</h1>
        <button className={styles.cerise} onClick={()=> this.props.colorClick('cerise')}>Cerise</button>
        <button className={styles.saffron} onClick={()=> this.props.colorClick('saffron')}>Saffron</button>
        <button className={styles.viridian} onClick={()=> this.props.colorClick('viridian')}>Viridian</button>
        <button className={styles.capri} onClick={()=> this.props.colorClick('capri')}>Capri</button>
      </section>
    );
  }
}
