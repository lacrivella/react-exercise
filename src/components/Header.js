import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    image: propTypes.string
  }
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <img src={this.props.image} style={{ height: '20em' }}/>
      </header>
    );
  }
}

