import React, { Component, useState } from 'react';
// import Header from './Header';
// import Dog from './Dog';
// import Flower from './Flower';
// import Cat from './Cat';
// import SayHello from './SayHello';
// import Color from './Color';
// // import ColorButton from './ColorButton';
import ColorPicker from './ColorPicker';
import Incrementer from './Incrementer';

// import Color from './Color';

export default class App extends Component {
 
  render() {
    return (
     <>
       {/* <Header title="Nolan" image="src/assets/nolie.jpg" />
       <SayHello />
       <Dog name="Nolan" age="14" weight="45lbs" />
       <Header title="Flowers" image="src/assets/platycodon.jpg" />
       <Flower name="Platycodon" color="purple" meaning="unchanging love, honesty and obedience." />
       <Header title="Cats" image="src/assets/bombay.jpg" />
       <Cat name="Omi" breed="Bombay" color="black short hair" />
       <Color hex="#3B444B" rgb={{ red: 58, green: 68, blue: 75 }} name="arsenic gray" />
       <Header title="Color Button" /> */}
      <ColorPicker />
      <Incrementer />
     </>
    );
  }
}
