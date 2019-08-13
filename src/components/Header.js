import React from 'react';
import propTypes from 'prop-types';

function Header({ title, image }) {
  return (
    <header>
      <h1>{title}</h1>
      <img src={image} style={{ height: '20em' }}/>
    </header>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string
};

export default Header;
