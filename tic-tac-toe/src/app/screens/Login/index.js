import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionLogin from '../../../redux/Login/actions';

import Login from './layout';

class LoginContainer extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null, 4));
    this.props.dispatch(actionLogin.auth(values.mail, values.password));
  };
  render() {
    return <Login onSubmit={this.submit} />;
  }
}

export default connect()(LoginContainer);
