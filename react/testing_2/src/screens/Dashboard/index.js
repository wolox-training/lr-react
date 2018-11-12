import React, { Component } from 'react';

import logo from './logo.svg';
import './styles.css';
import { DATA } from './constants';
import UserList from './components/UserList';

class Dashboard extends Component {
  state = { users: DATA };

  componentDidMount() {
    console.log('Dashboard mounted!')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h1 className="App-title">This is a finger exercise</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default Dashboard;
