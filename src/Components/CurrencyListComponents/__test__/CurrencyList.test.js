import React from 'react';
import { mount } from 'enzyme';
import axios from 'axios'
import CurrencyListBox from '../CurrencyListBox';
import CurrencyBox from '../CurrencyBox';
import { lstat } from 'fs';

let wrapped;

beforeEach(() => {
  wrapped=mount(<CurrencyListBox/>)
  wrapped.setState({
    dataCurrenciesRender:[{
      currency: 'EU',
      rate: 1.23,
      detail: 'EURO'
    }]
  })
})

it('render curency box based on dataCurrencyRender length', () => {
  expect(wrapped.find(CurrencyBox).length).toEqual(1)
})

describe('currencyBox Components', () => {
  it('has curreny deatil and rate props', () => {
    expect(wrapped.find(CurrencyBox).props().rate).toEqual(1.23)
    expect(wrapped.find(CurrencyBox).props().currency).toEqual('EU')
    expect(wrapped.find(CurrencyBox).props().detail).toEqual('EURO')
  })
  it('has button delete and delete currencyBox component', () => {
    wrapped.find(CurrencyBox).find('button').simulate('click', {})
    expect(wrapped.find(CurrencyBox).length).toEqual(0)
  })
})