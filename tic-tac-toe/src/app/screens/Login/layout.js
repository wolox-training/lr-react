import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { customInput } from './fields/index';
import { required, minLength, validateEmail } from './validation';
import './layout.scss';

class Login extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="user"
          component={customInput}
          type="mail"
          label="User"
          validate={[required, minLength, validateEmail]}
        />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required, minLength]}
        />
        <button type="submit"> Sign in </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login'
})(Login);
