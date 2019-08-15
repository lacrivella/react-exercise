import React, { Component } from 'react';
import styles from './ColorPicker.css';

export default class ColorPicker extends Component {
  render() {
    return (
      <section className={styles.ColorPicker}>
        <h1>select a color</h1>
        <button className={styles.mediumvioletred} onClick={()=> this.props.colorClick('mediumvioletred')}>Cerise</button>
        <button className={styles.yellow} onClick={()=> this.props.colorClick('yellow')}>Saffron</button>
        <button className={styles.chartreuse} onClick={()=> this.props.colorClick('chartreuse')}>Chartreuse</button>
        <button className={styles.deepskyblue} onClick={()=> this.props.colorClick('deepskyblue')}>Capri</button>
      </section>
    );
  }
}
