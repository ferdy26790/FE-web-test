import React from 'react';
import { shallow } from 'enzyme';
import { FormControl } from 'react-bootstrap'
import App from '../App'
import BaseCurrencyBox from '../BaseCurrencyBox'

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App/>)
})

it('has input with and user can type number', () => {
  wrapped.find(FormControl).simulate('change', {
    target: { value : 12}
  })
  wrapped.update()
  expect(wrapped.find(FormControl).props().value).toEqual(12)
})

it('show BaseCurrencyBox', () => {
  expect(wrapped.find(BaseCurrencyBox).length).toEqual(1);
})