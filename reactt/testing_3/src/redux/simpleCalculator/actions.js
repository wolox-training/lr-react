export const actions = {
  ADD: '@@SIMPLECALCULATOR/ADD',
  SUBSTRACT: '@@SIMPLECALCULATOR/SUBSTRACT'
};

const actionCreators = {
  add: () => ({ type: actions.ADD }),
  substract: () => ({ type: actions.SUBSTRACT })
};

export default actionCreators;
