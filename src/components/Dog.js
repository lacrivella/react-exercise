import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dog extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    weight: PropTypes.string
  }
  render() {
    return (
      <dl>
        <dt>Name</dt>
        <dd>{this.props.name}</dd>
  
        <dt>Age</dt>
        <dd>{this.props.age}</dd>
  
        <dt>Weight</dt>
        <dd>{this.props.weight ? this.props.weight : 'unknown'}</dd>
      </dl>
    );
  }
}

// we can write weight like this as well
// {weight && (
//   <>
//     <dt>Weight</dt>
//     <dd>{weight}</dd>
//   </>
// )}

