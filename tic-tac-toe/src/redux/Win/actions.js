import { getLines } from '../../services/GameService';

import { actions } from './actionsTypes';

const actionCreators = {
  getLines: () => async dispatch => {
    const response = await getLines();
    dispatch({ type: actions.GET_LINES, payload: response.data });
    if (response.ok) {
      dispatch({
        type: actions.GET_LINES_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_LINES_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionCreators;
