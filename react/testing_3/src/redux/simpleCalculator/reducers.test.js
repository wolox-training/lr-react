import reducer from './reducer'

import { actions } from './actions'

describe('Reducer --- Test simple calculator reducer', () => {
  it('Reducer for ADD action', () => {
    expect(state).toEqual({ calculatorValue: 11 });
  });

  it('Reducer for SUBSTRACT action', () => {
    let state = { calculatorValue: 10 };
    state = reducer(state, { type: actions.SUBSTRACT });
  });
});
