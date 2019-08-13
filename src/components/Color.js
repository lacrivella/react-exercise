import React from 'react';

export default function Color() {
  const name = 'arsenic gray';
  const rgb = {
    r: 59,
    g: 68,
    b: 75
  };
  const hex = '#3B444B';

  const styles = {
    backgroundColor: hex,
    width: '0.8rem',
    height: '0.8rem',
    display: 'inline-block'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{name} <div style={styles}></div></dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>
        <p>Red: {rgb.r}</p>
        <p>Green: {rgb.g}</p>
        <p>Blue: {rgb.b}</p>
      </dd>
    </dl>
  );
}
