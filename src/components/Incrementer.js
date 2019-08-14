import React, { useState } from 'react';

export default function Incrementer() {
  const [count, setCount] = useState(0);
  const increment = () => {
    // const [isColor, setColor] = useState(false);
    setCount(count + 1);
    // setColor(!isColor);
  };
  return (
    <div>
      <h2>color changer</h2>
      <button onClick={increment}>push it</button>
      <h1>{count}</h1>
    </div>
  );
}