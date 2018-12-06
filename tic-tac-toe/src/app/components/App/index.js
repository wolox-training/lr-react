import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, push } from 'connected-react-router';
import { connect } from 'react-redux';

import { history } from '../../../redux/store';
import '../../../scss/index.scss';
import Game from '../../screens/Game';
import Login from '../../screens/Login';
import About from '../../screens/About';

class App extends Component {
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.dispatch(push('/'));
    }
  }
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/game" component={Game} />
          <About />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default connect()(App);
