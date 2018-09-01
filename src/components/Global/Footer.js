//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/Footer.css';

class Footer extends Component {

  static propTypes = {
    copyright: PropTypes.string,
  };

  render() {
    const {copyright= '&copy; Kevin Mejia 2018'} = this.props;
    
    //dangerouslySetInnerHTML inyect the html of unsecure way
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{ __html:copyright}}/>
      </div>
    );
  }
}

export default Footer;
