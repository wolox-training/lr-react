import { actions } from './actions';

/*
initialState has an object that indicates the initial values for the store.
https://redux.js.org/basics/reducers#designing-the-state-shape
This is important because:
1. Sometimes the UI needs to show a part of the state and will crash if it doesn't exist.
2. Other people using this file will look at the initialState to learn about the structure
of the state. If you add an extra property to the state from inside the reducer but you
don't add it to the initialState, they'll probably won't notice it's there.
*/
const initialState = {
  favoriteBook: null,
  readBooks: ['Moby Dick']
};

/*
https://redux.js.org/basics/reducers#handling-actions
A reducer is a function that handles how the state should change with each action.
In our case, the reducer only knows how to set our favorite book on the store.
*/
function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_FAVORITE_BOOK:
      return {
        ...state,
        favoriteBook: action.payload.favoriteBook
      };
    default:
      return state;
  }
}

export default reducer;
