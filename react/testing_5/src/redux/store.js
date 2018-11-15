import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({ form });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
);

export default store;
