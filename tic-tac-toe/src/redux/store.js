import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import gameReducer from './Game/reducer';
import lineReducer from './Win/reducer';

const reducers = {
  gameReducer,
  lineReducer
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const store = createStore(combineReducers(reducers), composeEnhancers(applyMiddleware(thunk)));

export default store;
