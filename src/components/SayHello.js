import React from 'react';

function SayHello() {
  const sayHello = () => {
    console.log('hello');
  };
  return (
    <div>
      <button onClick={sayHello}>Say Hello!</button>
    </div>
  );
}

export default SayHello;
