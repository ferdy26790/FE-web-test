import React from 'react';
import { mount } from 'enzyme';
import CurrencyListBox from '../CurrencyListBox';
import CurrencyBox from '../CurrencyBox';
import AddButton from '../AddCurrencyComponent/AddButton';
import FormAddCurrency from '../AddCurrencyComponent/FormAddCurrency';
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

it('render button add more currencies', () => {
  expect(wrapped.find(AddButton).text()).toEqual("(+) Add More Currencies")
})

it('render form input add currency when button add is clicked', () => {
  wrapped.find(AddButton).simulate('click')
  expect(wrapped.find(FormAddCurrency).length).toEqual(1)
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