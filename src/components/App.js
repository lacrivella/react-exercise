import React from 'react';
import Dog from './Dog';
// import Color from './Color';

export default function App() {
  const name = 'Tiffany Blue';
  const rgb = {
    red: 129,
    green: 216,
    blue: 208
  };

  return (
    <>
      <Dog name="Nolan" age="14" weight="45lbs" />
      {/* <Color name={name} rgb={rgb} /> */}
      
    </>
  );
}
