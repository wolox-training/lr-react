import { push } from 'connected-react-router';

import { getLogin } from '../../services/GameService';

import { actions } from './actionsTypes';

const actionLogin = {
  auth: (mail, password) => async dispatch => {
    dispatch({ type: actions.GET_LOGIN, payload: true });
    const response = await getLogin(mail, password);
    if (response.ok) {
      dispatch({
        type: actions.GET_LOGIN_SUCCESS,
        payload: response.data
      });
      if (!response.data.length) {
        dispatch(push('/'));
      } else {
        dispatch(push('/game'));
      }
    } else {
      dispatch({
        type: actions.GET_LOGIN_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionLogin;
