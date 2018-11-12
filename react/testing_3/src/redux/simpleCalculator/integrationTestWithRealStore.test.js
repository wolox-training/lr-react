import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SimpleCalculator from '../../app/components/SimpleCalculator'

import actionCreators from './actions'
import reducer from './reducer';

configure({ adapter: new Adapter() });

describe('Test - Store + reducer integration testing with real store', () => {
  let store, wrapper;

  beforeEach(() => {
    store = createStore(reducer);
    wrapper = mount(<Provider store={store}><SimpleCalculator /></Provider>)
  })

  it('Check SimpleCalculator Prop matches store values after ADD action', () => {
    store.dispatch(actionCreators.add());
    wrapper.update();
  });

  it('Check SimpleCalculator Prop matches store values after SUBSTRACT action', () => {
    expect(wrapper.find('SimpleCalculator').prop('calculatorValue')).toBe(-1);
  });
});
