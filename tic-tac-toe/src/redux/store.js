import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import gameReducer from './Game/reducer';
import lineReducer from './Win/reducer';

const reducers = {
  gameReducer,
  lineReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
