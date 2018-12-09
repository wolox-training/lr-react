import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { history } from '../../../redux/store';
import '../../../scss/index.scss';
import Game from '../../screens/Game';
import Login from '../../screens/Login';
import About from '../../screens/About';
import actionLogin from '../../../redux/Login/actions';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(actionLogin.token(localStorage.getItem('token')));
  }
  render() {
    const { tokenLoading } = this.props;
    return (
      <ConnectedRouter history={history}>
        <Fragment>
          <Route exact path="/" component={Login} />
          <Route path="/game" component={Game} />
          {tokenLoading ? (
            <div />
          ) : (
            <div>
              <Route
                render={() => (this.props.userToke.length ? <Redirect to="/game" /> : <Redirect to="/" />)}
              />
            </div>
          )}
        </Fragment>
      </ConnectedRouter>
    );
  }
}
const mapStateToProps = store => ({
  userToke: store.loginReducer.userToke,
  tokenLoading: store.loginReducer.tokenLoading
});

App.propTypes = {
  userToke: PropTypes.number,
  tokenLoading: PropTypes.bool
};

export default connect(mapStateToProps)(App);
