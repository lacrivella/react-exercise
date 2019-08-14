import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Flower extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    meaning: PropTypes.string
  }
  render() {
    return (
      <p>
        <h3>{name}</h3>
        <ul>
          <li>Color: {this.props.color}</li>
          <li>Meaning: {this.props.meaning}</li>
        </ul>
      </p>
    );
  }
}

