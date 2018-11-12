import React from 'react';

import logo from '../../../assets/logo.svg';

import SimpleCalculator from '../../components/SimpleCalculator';

import './styles.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <h1 className="home-title">Jest over actions and reducers</h1>
      </header>
      <p className="home-intro">
        Press add or subtract to change the number value!
        </p>
      <SimpleCalculator />
    </div>
  );
}

export default Home;
