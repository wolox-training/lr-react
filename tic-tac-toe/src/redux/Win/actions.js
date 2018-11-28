import { getLines } from '../../services/GameService';

import { actions } from './actionsTypes';

const actionCreators = {
  getLines: () => async dispatch => {
    dispatch({ type: actions.GET_LINES, payload: true });
    const response = await getLines();
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
    dispatch({ type: actions.GET_LINES, payload: false });
  }
};

export default actionCreators;
