import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import './scss/index.scss';

import NavBar from './app/screens/NavBar';
import Game from './app/screens/Game';
import Login from './app/screens/Login';
import Logout from './app/screens/Logout';
import About from './app/screens/About';
import store, { history } from './redux/store';

const Links = () => (
  <nav>
    <Link to={{ pathname: '/game' }}>Game</Link>
    <Link to={{ pathname: '/about' }}>About</Link>
    <Link to={{ pathname: '/logout' }}>Logout</Link>
  </nav>
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {localStorage.getItem('token') ? <Links /> : null}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/game" component={Game} />
          <Route path="/about" component={About} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
