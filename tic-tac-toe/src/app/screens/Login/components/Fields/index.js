import React, { Fragment } from 'react';

import styles from '../../layout.scss';

export const customInput = ({ input, label, type, meta: { touched, error } }) => (
  <Fragment>
    <label>{label}</label>
    <input {...input} type={type} />
    {touched && error && <div className={styles.textAlert}>{error}</div>}
  </Fragment>
);
