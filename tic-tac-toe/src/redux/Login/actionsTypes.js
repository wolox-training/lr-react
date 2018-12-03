import { createTypes } from 'redux-create-types';

export const actions = createTypes(['GET_LOGIN', 'GET_LOGIN_SUCCESS', 'GET_LOGIN_FAILURE'], '@@LOGIN');
