import React, { Component, useState } from 'react';
// import Header from './Header';
// import Dog from './Dog';
// import Flower from './Flower';
// import Cat from './Cat';
// import SayHello from './SayHello';
// import Color from './Color';
// // import ColorButton from './ColorButton';
// import ColorPicker from './ColorPicker';
// import ColorDisplay from './ColorDisplay';
// import Incrementer from './Incrementer';
import ColorsList from './ColorsList';


// import Color from './Color';

export default function App() {
  // state = {
  //   color: ''
  // };

  // colorClickState = color => {
  //   this.setState({ color });
  // }
  // render() {
  //   const { color } = this.state;
  const colors = [
    { name: 'lime', hex: '#bfff00', rgb: { red: 191, green: 255, blue: 0 } },
    { name: 'grapefruit', hex: '#df6c67', rgb: { red: 223, green: 108, blue: 103 } },
    { name: 'orange', hex: '#ffa500', rgb: { red: 255, green: 165, blue: 0 } }
  ];

  return (
  /* <Header title="Nolan" image="src/assets/nolie.jpg" />
       <SayHello />
       <Dog name="Nolan" age="14" weight="45lbs" />
       <Header title="Flowers" image="src/assets/platycodon.jpg" />
       <Flower name="Platycodon" color="purple" meaning="unchanging love, honesty and obedience." />
       <Header title="Cats" image="src/assets/bombay.jpg" />
       <Cat name="Omi" breed="Bombay" color="black short hair" />
       <Color hex="#3B444B" rgb={{ red: 58, green: 68, blue: 75 }} name="arsenic gray" />
       <Header title="Color Button" /> */
  /* <ColorPicker colorClick={this.colorClickState}/>
      <ColorDisplay color={color}/>
      <Incrementer /> */
    <ColorsList colors={colors} />
  );
}


