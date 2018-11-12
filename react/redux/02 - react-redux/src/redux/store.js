import { createStore, compose } from 'redux';

import books from './book/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(books, composeEnhancers());
