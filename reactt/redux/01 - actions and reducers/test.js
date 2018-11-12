import store from './store';
import authActionsCreators from '../01 - actions and reducers/auth/actions';
import booksActionsCreators from '../01 - actions and reducers/books/actions';

describe('Actions', () => {
  xit('sets your favorite book', () => {
    /*
    Look at the reducer in reducer.js
    It knows how to handle an action with type actions.SET_FAVORITE_BOOK.
    Now you only need to add an actionCreator to actions.js
    */

    store.dispatch(booksActionsCreators.setFavoriteBook('The Metamorphosis'));

    expect(store.getState().books.favoriteBook).toEqual('The Metamorphosis');
  });

  xit('adds a book', () => {
    /*
    Look at the actionCreators object in actions.js
    It knows how to dispatch an action with type actions.ADD_READ_BOOK.
    Now you only need to complete the reducer to handle that action.
    */

    store.dispatch(booksActionsCreators.addReadBook('The Lord of the Rings'));

    expect(store.getState().books.readBooks).toEqual(['Moby Dick', 'The Lord of the Rings']);
  });

  xit('set most hated book', () => {
    /*
    You don't have an action or reducer to do this. You need to add them.
    And don't forget to add the property to initialState!
    */

    store.dispatch(booksActionsCreators.setMostHatedBook('Introduction to Linear Algebra'));

    expect(store.getState().books.mostHatedBook).toEqual('Introduction to Linear Algebra');
  });

  xit('logs in', () => {
    /*
    Let's use the other store branch.
    We don't want a branch's actions to affect the other one.
    */

    store.dispatch(authActionsCreators.logIn('cosme.fulanito@wolox.com.ar', 'QpwL5tke4Pnpja7X'));

    expect(store.getState().auth).toEqual({
      email: 'cosme.fulanito@wolox.com.ar',
      token: 'QpwL5tke4Pnpja7X'
    });

    expect(store.getState().books).not.toHaveProperty(['email', 'token']);
  });

  xit('handle unknown action', () => {
    /*
    What if someone dispatches an action we don't know how to handle?
    We ignore it!
    You don't need to do anything for this test, it's only to show you how the ignoring part works.
    Look at the reducer. See the default case? It's returning the unmodified state.

    Some third-party libraries dispatch their own actions and have their own reducers to handle them.
    We ignore their actions in our reducers and let the libraries handle them.
    */

    const previousState = store.getState();

    store.dispatch({
      type: 'RANDOM_UNRELATED_ACTION'
    });

    expect(store.getState()).toEqual(previousState);
  });
});
