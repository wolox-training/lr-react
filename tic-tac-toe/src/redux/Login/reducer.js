import { actions } from './actionsTypes';

const initialState = {
  auth: [],
  loginLoading: false,
  loginError: null,
  userToke: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LOGIN:
      return {
        ...state,
        loginLoading: action.payload
      };
    case actions.GET_LOGIN_SUCCESS:
      return {
        ...state,
        loginError: initialState.loginError,
        auth: action.payload,
        loginLoading: false
      };
    case actions.GET_LOGIN_FAILURE:
      return {
        ...state,
        auth: initialState.auth,
        loginError: action.payload,
        loginLoading: false
      };
    case actions.GET_TOKEN_SUCCESS:
      return {
        ...state,
        userToke: action.payload
      };
    case actions.GET_TOKEN_FAILURE:
      return {
        ...state,
        userToke: initialState.userToke
      };
    default:
      return state;
  }
};

export default reducer;
