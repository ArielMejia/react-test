import React, { Component } from 'react';
import Logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={Logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World With React</h1>
        </header>
      </div>
    );
  }
}

export default Header;
