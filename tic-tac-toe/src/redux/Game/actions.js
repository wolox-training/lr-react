export const actions = {
  CLICK_PRUEBA: '@@GAME/CLICK_PRUEBA'
};

export const clickprueba = stepNumber => ({
  type: actions.CLICK_PRUEBA,
  payload: {
    stepNumber
  }
});
