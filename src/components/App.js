import React from 'react';
import Header from './Header';
import Dog from './Dog';
import Flower from './Flower';

// import Color from './Color';

export default function App() {
 
  return (
    <>
      <Header title="Nolan" image="src/assets/nolie.jpg" />
      <Dog name="Nolan" age="14" weight="45lbs" />
      <Header title="Flowers" image="src/assets/platycodon.jpg" />
      <Flower name="Platycodon" color="purple" meaning="unchanging love, honesty and obedience." />
    </>
  );
}
