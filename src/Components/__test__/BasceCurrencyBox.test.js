import React from 'react';
import { mount } from 'enzyme';
import App from '../App'
import BaseCurrencyBox from '../BaseCurrencyBox'

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <App>
      <BaseCurrencyBox/>
    </App>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('has base USD currency, detail, value input', () => {
  expect(wrapped.find('p').get(0).props.children).toEqual('USD - United States Dollar')
  expect(wrapped.find('strong').get(0).props.children).toEqual('USD')
  expect(wrapped.find('strong').get(1).props.children).toEqual(1)
})

