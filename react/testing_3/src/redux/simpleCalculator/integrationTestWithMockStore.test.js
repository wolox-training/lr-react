import React from 'react';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'

import SimpleCalculator from '../../app/components/SimpleCalculator'

import actionCreators, { actions } from './actions'

configure({ adapter: new Adapter() });

describe('Test - Store + reducer integration testing with mocked store', () => {
  const initialState = { calculatorValue: 10 };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><SimpleCalculator /></Provider>);
  })

  it('Check SimpleCalculator Prop matches with initialState', () => {
  });

  it('Check ADD action dispatched with the mocked store to be the expected action', () => {
    let action;
    store.dispatch(actionCreators.add());
    action = store.getActions();
  });

  it('Check SUBSTRACT action dispatched with the mocked store to be the expected action', () => {
    expect(action[0].type).toBe(actions.SUBSTRACT);
  });
});
