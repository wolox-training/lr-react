import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionLogin from '../../../redux/Login/actions';

import Login from './layout';

class LoginContainer extends Component {
  submit = values => {
    this.props.dispatch(actionLogin.auth(values.mail, values.password));
  };
  render() {
    return <Login onSubmit={this.submit} />;
  }
}

const mapStateToProps = store => ({
  auth: store.loginReducer.auth
});

export default connect(mapStateToProps)(LoginContainer);
