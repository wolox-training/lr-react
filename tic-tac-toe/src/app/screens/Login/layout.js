import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, minLength, validateEmail } from '../../../utils';

import { customInput } from './components/Fields/index';
import './layout.scss';

const Login = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="mail"
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

export default reduxForm({
  form: 'login'
})(Login);
