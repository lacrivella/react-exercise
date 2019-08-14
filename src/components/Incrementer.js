import React, { useState } from 'react';
import styles from './Incrementer.css';

export default function Incrementer() {
  const [count, setCount] = useState(0);
  const [isColor, setColor] = useState(false);
  const increment = () => {
    setCount(count + 1);
    setColor(!isColor);
  };
  return (
    <div>
      <button onClick={increment}>push it</button>
      <h2 className={isColor ? styles.rainbow : ''}>make it rainbow</h2>
      <h1>{count}</h1>
    </div>
  );
}