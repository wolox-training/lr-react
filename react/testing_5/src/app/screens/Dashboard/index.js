import React, { Component } from 'react';

import Header from './components/Header';
import SignupForm from './components/SignupForm';
import SignupResult from './components/SignupResult';
import './styles.css';

class Dashboard extends Component {
  state = { submitted: false };

  submitForm = () => this.setState({ submitted: true });

  cleanForm = () => this.setState({ submitted: false });

  render() {
    const { submitted } = this.state;
    return (
      <div className="app">
        <Header />
        {submitted ? <SignupResult onClick={this.cleanForm} /> : <SignupForm onSubmit={this.submitForm} />}
      </div>
    );
  }
}

export default Dashboard;
