import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
// import "./SubTotal.css";

export default class SubTotal extends Component {
  render() {
    return (
      <Row>
        <Col xs={6}>Subtotal</Col>
        <Col xs={6}>
          <strong>$1379</strong>
        </Col>
      </Row>
    );
  }
}
