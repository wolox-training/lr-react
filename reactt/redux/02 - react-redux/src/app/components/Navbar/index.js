import React from 'react';

import styles from './styles.scss';
import woloxLogo from './assets/logo-wolox.svg';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <img className={styles.navImage} src={woloxLogo} alt="Wolox logo" />
      <h2 className={styles.navTitle}>Book Shopping</h2>
    </nav>
  );
}

export default Navbar;
