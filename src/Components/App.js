import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap'
import BaseCurrencyBox from './BaseCurrencyBox'
import CurrencyListBox from './CurrencyListComponents/CurrencyListBox';

class App extends Component {
  constructor(){
    super()
    this.state = {
      value: 1
    }
  }
  render() {
    return (
      <div className="App">
        <FormControl
          style={{width: "25%", margin: "auto"}} 
          type="number"
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
          placeholder="input number here.."
        />
        <BaseCurrencyBox value={this.state.value}/>
        <CurrencyListBox value={this.state.value}/>
      </div>
    );
  }
}

export default App;
