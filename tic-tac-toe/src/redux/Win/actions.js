import { withSuccess } from 'redux-recompose';

import { getLines } from '../../services/GameService';

import { actions } from './actionsTypes';

const privateActionCreators = {
  getLinesSuccess: response => ({
    type: actions.GET_LINES_SUCCESS,
    payload: response.data
  }),
  getLinesError: error => ({
    type: actions.GET_LINES_FAILURE,
    payload: error.problem
  })
};

const actionCreators = {
  getLines: () => ({
    type: actions.GET_LINES,
    target: 'lines',
    service: getLines,
    injections: [
      withSuccess((dispatch, response) => {
        dispatch({
          type: actions.GET_LINES_SUCCESS,
          target: 'login',
          payload: response.data
        });
      })
    ]
  })
};

export default actionCreators;
