import React from 'react';
import nolie from '../assets/nolie.jpg';

export default function Header() {
  return (
    <header>
      <h1>Nolan!</h1>
      <img src={nolie} style={{ height: '20em' }}/>
    </header>
  );
}
