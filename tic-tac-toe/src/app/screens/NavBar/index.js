import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logout from '../Logout';

export const NavBar = () => (
  <nav>
    <Link to={{ pathname: '/game' }}>Game</Link>
    <Link to={{ pathname: '/about' }}>About</Link>
    <Logout />
  </nav>
);

export default connect()(NavBar);
