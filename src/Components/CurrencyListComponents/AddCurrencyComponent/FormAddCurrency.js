import React, { Component } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap'
class FormAddCurrency extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
  }
  render() {
    return (
      <InputGroup style={{ margin: '1em' }}>
        <FormControl 
          type="text"
          value={this.state.input}
          onChange={(e) => {
            this.setState({
              input: e.target.value
            })
          }}
          />
        <InputGroup.Button>
          <Button
            onClick={() => {
              this.props.handleSubmit(this.state.input)
            }}
          >
            Submit
          </Button>
        </InputGroup.Button>
      </InputGroup>
    )
  }
}

export default FormAddCurrency;