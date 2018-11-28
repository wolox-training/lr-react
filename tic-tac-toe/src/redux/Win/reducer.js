import { actions } from './actionsTypes';

const initialState = {
  constLine: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LINES:
      return {
        ...state,
        constLine: action.payload
      };
    case actions.GET_LINES_SUCCESS:
      return {
        ...state,
        constLine: action.payload
      };
    case actions.GET_LINES_FAILURE:
      return {
        ...state,
        constLine: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
