import { actions } from './actionsTypes';

const initialState = {
  auth: false,
  loginLoading: false,
  loginError: null
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
        message: action.message
      };
    case actions.GET_LOGIN_FAILURE:
      return {
        ...state,
        auth: initialState.auth,
        loginError: action.payload,
        message: action.message
      };
    default:
      return state;
  }
};

export default reducer;
