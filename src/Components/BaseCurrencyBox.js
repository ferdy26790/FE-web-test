import React, { Component } from 'react'
import { Grid, Row, Col, FormControl } from 'react-bootstrap';

class BaseCurrencyBox extends Component{
  render(){
    return (
      <div>
        <Grid style={{border: '2px solid black', width: '25em'}}>
          <Row className="show-grid" style={{ paddingTop: '0.5em' }}>
            <Col xs={12} md={12}>
              <p className="baseDetail">USD - United States Dollar</p>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <p className="baseCurrency"><strong>USD</strong></p>
            </Col>
            <Col xs={12} md={4}>
              <p className="baseValue"><strong>{this.props.value}</strong></p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default BaseCurrencyBox