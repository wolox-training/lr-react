/*
These are action types.
The type of an action is a string that describes an action.
The reducer will decide how to handle an action based on its type.
See the @@BOOKS? That's the namespace.
We use it to ensure an action type belongs to only one store branch. Also,
we can filter the actions shown by redux dev tools to see only the actions
related to @@BOOKS for easier debugging.
*/
export const actions = {
  SET_FAVORITE_BOOK: '@@BOOKS/SET_FAVORITE_BOOK',
  ADD_READ_BOOK: '@@BOOKS/ADD_READ_BOOK'
};

/*
This is our actionCreators object. https://redux.js.org/basics/actions#action-creators
The purpose of this object is to have all the action-creating logic in a single
place. All actions types must only be used inside an actionCreator.
*/
export default {
  addReadBook: title => ({
    type: actions.ADD_READ_BOOK,
    payload: {
      title
    }
  })
};
