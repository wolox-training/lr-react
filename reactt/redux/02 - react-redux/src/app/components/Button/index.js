import React from 'react';
import { func, string, bool } from 'prop-types';

import styles from './styles.scss';

function Button({ text, onClick, className, isDanger, children }) {
  return (
    <button className={`${styles.button} ${isDanger ? styles.danger : ''} ${className}`} onClick={onClick}>
      {text} {children}
    </button>
  );
}

Button.propTypes = {
  text: string,
  onClick: func.isRequired,
  isDanger: bool,
  className: string
};

export default Button;
