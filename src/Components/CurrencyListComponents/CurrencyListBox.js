import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import axios from 'axios';
import CurrencyBox from './CurrencyBox'

const CURRENCY_DETAIL = 
  {
    'IDR': 'Indonesian Rupiah',
    'EUR': 'Euro',
    'GBP': 'British Pound',
    'SGD': 'Singapore Dollar',
    'CAD': 'Cannadian Dollar',
    'CHF': 'Swiss Franc',
    'INR': 'Indian Rupee',
    'MYR': 'Malaysian Ringgit',
    'JPY': 'Japanese Yen',
    'KRW': 'South Korean Won'
  }

class CurrencyListBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataCurrenciesRender: [],
      dataCurrenciesSupport: []
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentWillMount(){
    this.fetchDataCurrencies()
  }

  fetchDataCurrencies(){
    axios.get('https://exchangeratesapi.io/api/latest?base=USD')
    .then(response => {
      let rates = response.data.rates
      let dataCurrenciesRender = []
      let dataCurrenciesSupport = []
      let count = 0
      for(let currencyData in rates){
        for(let currencyDetail in CURRENCY_DETAIL){
          if(currencyData === currencyDetail){
            count++
            let obj = {}
            obj.currency = currencyData
            obj.detail = CURRENCY_DETAIL[currencyDetail]
            obj.rate = rates[currencyData].toFixed(2)
            if(count <= 3){
              dataCurrenciesRender.push(obj)
            }else{
              dataCurrenciesSupport.push(obj)
            }
          }
        }
      }
      this.setState({
        dataCurrenciesRender: dataCurrenciesRender,
        dataCurrenciesSupport: dataCurrenciesSupport
      })
    })
    .catch( err => alert(err))
  }

  handleDelete(currencyDelete){
    let newDataCurrenciesRender = this.state.dataCurrenciesRender.slice()
    let newDataCurrenciesSupport = this.state.dataCurrenciesSupport.slice()
    let index = newDataCurrenciesRender.findIndex(currencyRender => currencyRender.currency === currencyDelete)
    let newDataCurrencySupport = newDataCurrenciesRender.splice(index,1)
    newDataCurrenciesSupport.concat(newDataCurrencySupport)
    this.setState({
      dataCurrenciesRender: newDataCurrenciesRender,
      dataCurrenciesSupport: newDataCurrenciesSupport
    })
  }

  render() {
    return (
      <Grid style={{border: '2px solid black', width: '25em'}}>
          {
            this.state.dataCurrenciesRender.map((data, i) => {
              return <CurrencyBox
                key={i}
                currency={data.currency}
                rate={data.rate}
                detail={data.detail}
                value={this.props.value}
                handleDeleteButton={this.handleDelete}
              />
            })
          }
      </Grid>
    );
  }
}

export default CurrencyListBox;