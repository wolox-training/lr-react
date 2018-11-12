import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function SignupResult({ onClick }) {
  return (
    <Fragment>
      <span className="result">User has been created successfully</span>
      <button type="submit" onClick={onClick}>
        Reload form
      </button>
    </Fragment>
  );
}

SignupResult.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default SignupResult;
