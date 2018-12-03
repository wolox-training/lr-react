import { createTypes } from 'redux-create-types';

export const actions = createTypes(['GET_LINES', 'GET_LINES_SUCCESS', 'GET_LINES_FAILURE'], '@@LINES');
