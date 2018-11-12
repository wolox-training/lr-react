import React from 'react';

import styles from './styles.scss';
import woloxLogo from './assets/logo-wolox-white.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h2 className={styles.footerTitle}>we are game changers</h2>
        <img className={styles.footerImage} src={woloxLogo} alt="Wolox white logo" />
      </div>
      <div className={styles.footerContent}>
        <div className={styles.linksSocialmedia}>
          <a className={styles.linkSocial} href="https://www.facebook.com/woloxsoftware">
            <i className="fa fa-facebook-f" />
          </a>
          <a className={styles.linkSocial} href="https://twitter.com/wolox">
            <i className="fa fa-twitter" />
          </a>
          <a className={styles.linkSocial} href="https://github.com/Wolox">
            <i className="fa fa-github" />
          </a>
          <a className={styles.linkSocial} href="https://www.linkedin.com/company/wolox/">
            <i className="fa fa-linkedin" />
          </a>
        </div>
        <h6 className={styles.footerCopyright}>Copyright 2018. Wolox. All rights reserved</h6>
      </div>
    </footer>
  );
}

export default Footer;
