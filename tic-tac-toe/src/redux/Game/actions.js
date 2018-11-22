export const actions = {
  CLICK_STEP_NUMBER: '@@GAME/CLICK_STEP_NUMBER'
};

export const clickStepNumber = stepNumber => ({
  type: actions.CLICK_STEP_NUMBER,
  payload: {
    stepNumber
  }
});
