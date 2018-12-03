import { actions } from './actionsTypes';

const initialState = {
  constLine: [],
  constLineLoading: false,
  constLineError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LINES:
      return {
        ...state,
        constLineLoading: action.payload
      };
    case actions.GET_LINES_SUCCESS:
      return {
        ...state,
        constLineError: initialState.constLineError,
        constLine: action.payload,
        constLineLoading: false
      };
    case actions.GET_LINES_FAILURE:
      return {
        ...state,
        constLine: initialState.constLine,
        constLineError: action.payload,
        constLineLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
