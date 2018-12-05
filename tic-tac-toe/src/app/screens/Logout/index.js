import React, { Component } from 'react';
import { push } from 'connected-react-router';

class Logout extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    localStorage.removeItem('token');
    if (!localStorage.getItem('token')) {
      dispatch(push('/'));
    }
  }
  render() {
    return <dii>About</dii>;
  }
}

export default Logout;
