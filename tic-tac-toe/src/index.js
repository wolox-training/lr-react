import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Game from '../src/app/screens/Game';
import './scss/index.scss';

import reducer from './Game/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
