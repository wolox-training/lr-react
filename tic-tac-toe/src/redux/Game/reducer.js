import { actions } from './actions';

const initialState = {
  stepNumber: 0,
  xIsNext: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CLICK_PRUEBA:
      return {
        stepNumber: action.payload.stepNumber,
        xIsNext: !state.xIsNext
      };
    default:
      return state;
  }
};

export default reducer;
