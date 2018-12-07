import { actions } from './actions';

const initialState = {
  stepNumber: 0,
  xIsNext: true
};

// Create a new effect decoupled from the state structure at all.
const reducer = (state, action) => ({
  ...state,
  [action.stepNumber]: state[action.xIsNext] + action.payload
});
// Describe your reducer - without the switch
const reducerDescription = {
  'CLICK_STEP_NUMBER': reducer()
};
// Create it !
const reducer = createReducer(initialState, reducerDescription);
