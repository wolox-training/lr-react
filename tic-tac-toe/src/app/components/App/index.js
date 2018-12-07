import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';

import { history } from '../../../redux/store';
import '../../../scss/index.scss';
import Game from '../../screens/Game';
import Login from '../../screens/Login';
import actionsLogin from '../../../redux/Login/actions';

class App extends Component {
  componentDidMount() {
    this.props.checkToken(localStorage.getItem('token'));
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

App.propTypes = {
  checkToken: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  checkToken: userToken => dispatch(actionsLogin.token(userToken))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
