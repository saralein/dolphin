import React from 'react';
//import {Menu, MenuItem} from 'react-foundation';

const Nav = () => {
  return (
    <ul className="nav menu">
      <li className="menu-text">
        <img id="logo" src="/img/porpoise-logo.png" />
        <span>Data with a Porpoise</span>
      </li>
      <li><a href="#">Sign in</a></li>
    </ul>
  )
}

export default Nav;
