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
      if (!response.data.length || localStorage.getItem('token')) {
        window.alert('Username or password is incorrect');
        dispatch(push('/'));
      } else {
        const [{ token }] = response.data;
        localStorage.setItem('token', token);
        window.alert('Welcome to game');
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
