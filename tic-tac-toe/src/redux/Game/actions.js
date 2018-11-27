export const actions = {
  CLICK_STEP_NUMBER: '@@GAME/CLICK_STEP_NUMBER'
};

export const clickStepNumber = stepNumber => ({
  type: actions.CLICK_STEP_NUMBER,
  payload: {
    stepNumber
  }
});

const actionCreators = {
  getLines: () => async dispatch => {
    dispatch({ type: actions.GET_LINES });
    const response = await GameService.getLines();
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
