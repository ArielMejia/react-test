//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import Logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    //the way of get the properties is with this.props
    const {title,items} = this.props;

    //Other way without ES6 is the following 
    /**
     * const title = this.props.title;
     * const title = this.props.items;
    */

    return (
      <div className="Header">
        <header className="Logo">
          <img src={Logo} className="App-logo" alt="logo" />
          <h2 className="App-title">{title}</h2>

          <ul className="Menu">
            {items && items.map((item, key)=><li key={key}>{item.title}</li>)}
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
