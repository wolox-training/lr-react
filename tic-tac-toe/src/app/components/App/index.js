import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';

import { history } from '../../../redux/store';
import '../../../scss/index.scss';
import Game from '../../screens/Game';
import Login from '../../screens/Login';
import actionLogin from '../../../redux/Login/actions';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(actionLogin.token(localStorage.getItem('token')));
  }
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/game" component={Game} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default connect()(App);
