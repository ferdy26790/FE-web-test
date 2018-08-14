import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
class CurrencyBox extends Component {
  render() {
    return (
      <Row style={{border: '1px solid black', margin:'1em'}}>    
        <Col xs={12} md={6}>
          <p style={{ fontSize: '18px' }}>{this.props.currency}</p>
        </Col>
        <Col xs={12} md={6}>
          <p style={{ fontSize: '16px' }}><strong>{(this.props.value * this.props.rate).toFixed(2)}</strong></p>
        </Col>
        <Col xs={12} md={12}>
          <p style={{ fontSize: '12px' }}><strong><i>{this.props.currency} - {this.props.detail}</i></strong></p>
        </Col>
        <Col xs={12} md={10}>
          <p style={{ fontSize: '12px' }}><i>1 USD = {this.props.rate} {this.props.currency}</i></p>
        </Col>
        <Col xs={12} md={2}>
          <p style={{ fontSize: '12px' }}>
            <button
              onClick={() => {
                this.props.handleDeleteButton(this.props.currency)
              }}
            >
              (-)
            </button>
          </p>
        </Col>
      </Row>
    );
  }
}

export default CurrencyBox;