import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import CustomField from '../../../../components/Field';

import { FIELDS, SIGNUP_FORM } from './constants';
import { required } from './utils';

function SignupForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="signup-form">
      {FIELDS.map(field => (
        <Field component={CustomField} validate={required} key={field.name} {...field} />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: SIGNUP_FORM
})(SignupForm);
