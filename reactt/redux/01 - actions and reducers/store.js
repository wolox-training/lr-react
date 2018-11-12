import { createStore, combineReducers } from 'redux';
import books from './books/reducer';
import auth from './auth/reducer';

/*
https://redux.js.org/api/combinereducers
combineReducers returns a reducer.
The store will have 2 branches: auth and books.
You have to specify the store branch when you access it
- state.books.favoriteBook
- state.auth.email
*/
const reducer = combineReducers({
  auth,
  books
});

export default createStore(reducer);
