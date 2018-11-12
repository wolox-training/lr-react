import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import UserList from './index';

configure({ adapter: new Adapter() });

describe('UserList', () => {
  xit('shows new user when props are changed', () => {
  });
  xit('setProps makes componentDidUpdate to be executed', () => {
  });
});
