import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class AddButton extends Component {
  render() {
    return (
      <Button 
        style={{ margin: '1em' }}
        onClick={() => {
          this.props.handleClickAdd()
        }}
      >
        (+) Add More Currencies
      </Button>
    )
  }
}

export default AddButton;