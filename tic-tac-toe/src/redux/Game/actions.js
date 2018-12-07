export const actions = {
  CLICK_STEP_NUMBER: '@@GAME/CLICK_STEP_NUMBER'
};

export const clickStepNumber = stepNumber => {
  return { type: 'CLICK_STEP_NUMBER', target: 'counter', payload: stepNumber };
};
