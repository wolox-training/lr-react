import { push } from 'connected-react-router';

import { getLogin, getToken } from '../../services/GameService';

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
      if (response.data.length) {
        const [{ token }] = response.data;
        localStorage.setItem('token', token);
        // eslint-disable-next-line no-alert
        alert('Welcome to game');
        dispatch(push('/game'));
      } else {
        // eslint-disable-next-line no-alert
        alert('Username or password is incorrect');
      }
    } else {
      dispatch({
        type: actions.GET_LOGIN_FAILURE,
        payload: response.problem
      });
    }
  },
  token: token => async dispatch => {
    dispatch({ type: actions.GET_TOKEN, payload: true });
    const responseToke = await getToken(token);
    if (responseToke.ok) {
      dispatch({
        type: actions.GET_TOKEN_SUCCESS,
        payload: responseToke.data
      });
      if (!responseToke.data.length) {
        // eslint-disable-next-line no-alert
        alert('The token is invalide');
      }
    } else {
      dispatch({
        type: actions.GET_TOKEN_FAILURE,
        payload: responseToke.problem
      });
    }
  }
};

export default actionLogin;
