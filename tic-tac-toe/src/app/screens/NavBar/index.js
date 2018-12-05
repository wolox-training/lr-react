import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  const Links = () => (
    <nav>
      <Link to={{ pathname: '/game' }}>Game</Link>
      <Link to={{ pathname: '/about' }}>About</Link>
      <Link to={{ pathname: '/logout' }}>Logout</Link>
    </nav>
  );

  render() {
    return (
      <Links />
    );
  }
}

export default connect()(NavBar);
