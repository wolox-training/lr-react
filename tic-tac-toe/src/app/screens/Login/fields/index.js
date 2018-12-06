import React, { Fragment } from 'react';

import styles from '../layout.scss';

export const customInput = ({ input, label, type, meta: { touched, error } }) => (
  <Fragment>
    <label>{label}</label>
    <div>
      <input {...input} type={type} />
      {touched && error && <div className={styles.textAlert}>{error}</div>}
    </div>
  </Fragment>
);
