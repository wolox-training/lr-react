import React, { Fragment } from 'react';

import './style.scss';

export const customInput = props => {
  const { label, input, meta } = props;
  return (
    <Fragment>
      <label>{props.label}</label>
      <input {...props.input} type={props.type} />
      {meta.error && meta.touched && <div className="text-alert">{meta.error}</div>}
    </Fragment>
  );
};
