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
    //{messageError && <Error message={messageError} />}
    return <Login onSubmit={this.submit} />;
  }
}

const mapStateToProps = store => ({
  auth: store.loginReducer.auth
});

export default connect(mapStateToProps)(LoginContainer);
