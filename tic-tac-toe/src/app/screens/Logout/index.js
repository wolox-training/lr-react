import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

class Logout extends Component {
  eventlogout = () => {
    const { dispatch } = this.props;
    localStorage.removeItem('token');
    if (!localStorage.getItem('token')) {
      dispatch(push('/'));
    }
  };

  render() {
    return <a onClick={this.eventlogout}>Logout</a>;
  }
}

export default connect()(Logout);
