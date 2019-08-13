//following along with readings
import React from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boils</p>;
  }
  return <p>The water would NOT boil.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }
  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temp in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.hangleChange} />
        
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
