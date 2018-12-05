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
      console.log(response.data);
      if (!response.data.length || localStorage.getItem('token')) {
        dispatch(push('/'));
        window.alert('Username or password is incorrect');
      } else {
        const token = response.data[0].token;
        localStorage.setItem('token', token);
        localStorage.getItem('token');
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
