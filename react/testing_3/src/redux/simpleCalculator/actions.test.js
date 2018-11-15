import actionCreators, { actions } from './actions'

describe('Action --- Test simple calculator actions', () => {
  it('actionCreator ADD', () => {
    const add = actionCreators.add();
  });

  it('actionCreator SUBSTRACT', () => {
    const subtract = actionCreators.substract();
  });
});
