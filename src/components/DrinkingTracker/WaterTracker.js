import React, { Component } from 'react';
import PropType from 'prop-types';
import WaterForm from './WaterForm';
import WaterDisplay from './WaterDisplay';

export default class WaterTracker extends Component {
  static propTypes = {
    maxWater: PropType.number
  }

  static defaultProps = {
    maxWater: 32
  }
  state = {
    waterInput: '',
    totalWater: 0
  }

  handleNumberChange = ({ target }) => {
    this.setState({ waterInput: Number.parseInt(target.value) });
  }

  handleTotalWaterSubmit = event => {
    event.preventDefault();
    this.setState(state => {
      return {
        totalWater: state.waterInput + state.totalWater,
        waterInput: ''
      };
    });
  }

  render() {
    return (
      <>
        <WaterForm 
          number={this.state.waterInput} 
          handleNumberChange={this.handleNumberChange} 
          handleSubmit={this.handleTotalWaterSubmit}/>
        <WaterDisplay total={this.state.totalWater} max={this.props.maxWater}/>
      </>
    )
  }
}