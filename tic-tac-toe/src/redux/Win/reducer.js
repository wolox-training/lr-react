import { createReducer } from 'redux-recompose';

import { actions } from './actionsTypes';

const initialState = {
  constLine: [],
  constLineLoading: false,
  constLineError: null
};

const reducerDescription = {
  [actions.GET_LINES]: (state, action) => ({ ...state, constLineLoading: true }),
  [actions.GET_LINES_SUCCESS]: (state, action) => ({
    ...state,
    constLineError: initialState.constLineError,
    constLine: action.payload,
    constLineLoading: false
  }),
  [actions.GET_LINES_FAILURE]: (state, action) => ({
    ...state,
    constLine: initialState.constLine,
    constLineError: action.payload,
    constLineLoading: false
  })
};

export default createReducer(initialState, reducerDescription);
