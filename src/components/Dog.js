import React from 'react';

export default function Dog() {
  const dog = {
    name: 'Nolan',
    age: 14,
    weight: '45lbs'
  };
  const fields = Object.keys(dog)
    .map(key => {
      return (
        <>
          <dt>{key}</dt>
          <dd>{dog[key]}</dd>
        </>
      );
    });
  return (
    <dl>
      {fields}
    </dl>
  );
}
