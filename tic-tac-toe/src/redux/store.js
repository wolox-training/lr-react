import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import gameReducer from './Game/reducer';
import lineReducer from './Win/reducer';
import loginReducer from './Login/reducer';

export const history = createBrowserHistory();

const reducers = {
  gameReducer,
  lineReducer,
  loginReducer,
  form: formReducer,
  router: connectRouter(history)
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history), fetchMiddleware))
);

export default store;
