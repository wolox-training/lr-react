import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logout from '../Logout';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to={{ pathname: '/game' }}>Game</Link>
        <Link to={{ pathname: '/about' }}>About</Link>
        <Logout />
      </nav>
    );
  }
}

export default connect()(NavBar);
