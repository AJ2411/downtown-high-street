import React, { Component } from "react";
import { Button, Row, Col, Media, Accordion } from "react-bootstrap";

const styles = {
  mediaItem: {
    border: "1px solid black",
    backgroundColor: "#f5f5f5",
    paddingTop: "5px",
    paddingBottom: "5px"
    
  },
  mediaItemButtons: {
    paddingTop: "5px",
    paddingBottom: "5px"
  }
};

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  render() {
    return (
      // <Button
      //   style={{ outline: "none" }}
      //   onClick={() => this.setState({ collapsed: !this.state.collapsed })}
      // >
      //   {this.state.collapsed == false ? "See" : "Hide"} item details{" "}
      //   {this.state.collapsed == false ? "+" : "-"}
      // </Button>

      <Accordion>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0"
          onClick={() => this.setState({ collapsed: !this.state.collapsed })}
        >
          {this.state.collapsed === false ? "See" : "Hide"} item details{" "}
          {this.state.collapsed === false ? "+" : "-"}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <>
            <Media className={styles.mediaItem}>
              <img
                width={100}
                height={100}
                className="align-self-center mr-3"
                src="https://i.dummyjson.com/data/products/4/thumbnail.jpg"
                alt="Generic placeholder"
              />
              <Media.Body className={styles.mediaBody}>
                <p>OPPOF19 Smartphone </p>
                <Row>
                  <Col xs={6}>
                    <strong>$280 </strong>
                  </Col>
                  <Col xs={6}>1 piece</Col>
                </Row>

                <Row style={styles.mediaItemButtons}>
                  <Col xs={6}>
                    <Button variant="primary" size="sm">
                      Details
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Media.Body>
            </Media>
            <Media className={styles.mediaItem}>
              <img
                width={100}
                height={100}
                className="align-self-center mr-3"
                src="https://i.dummyjson.com/data/products/9/thumbnail.jpg"
                alt="Generic placeholder"
              />
              <Media.Body className={styles.mediaBody}>
                <p>Infinix INBOOK</p>
                <p>Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty</p>
                <Row>
                  <Col xs={6}>
                    <strong>$1099</strong>
                  </Col>
                  <Col xs={6}>1 piece</Col>
                </Row>

                <Row style={styles.mediaItemButtons}>
                  <Col xs={6}>
                    <Button variant="primary" size="sm">
                      Details
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Media.Body>
            </Media>
          </>
        </Accordion.Collapse>
      </Accordion>
    );
  }
}
