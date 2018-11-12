import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS: // TODO to implement the logic
      return { ...state };
    case actions.ADD_TO_CART: // TODO to implement the logic
      return { ...state };
    case actions.ADD_ITEM: // TODO to implement the logic
      return { ...state };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return { ...state };
    case actions.SEARCH_ITEM: // TODO to implement the logic
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
