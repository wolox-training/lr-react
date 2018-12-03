import { getLogin } from '../../services/GameService';

import { actions } from './actionsTypes';

const actionLogin = {
  auth: (mail, password) => async dispatch => {
    dispatch({ type: actions.GET_LOGIN, payload: true });
    const response = await getLogin(mail, password);
    console.log(response.data);
    if (response.ok) {
      dispatch({
        type: actions.GET_LOGIN_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_LOGIN_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionLogin;
