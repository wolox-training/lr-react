import { actions } from './actions';

const initialState = { calculatorValue: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD:
      return { ...state, calculatorValue: state.calculatorValue + 1 };
    case actions.SUBSTRACT:
      return { ...state, calculatorValue: state.calculatorValue - 1 };
    default:
      return state;
  }
}

export default reducer;