import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import './scss/index.scss';

import Game from './app/screens/Game';
import Login from './app/screens/Login/layout';
import store, { history } from './redux/store';

store.subscribe(() => {
  //console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/game" component={Game} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
