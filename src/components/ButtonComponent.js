import React from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";

const ButtonComponent = () => {
  return (
    <>
    <Container>
      <Row className="justify-content-md-center">
        
        <Col md="auto">
          <ButtonGroup aria-label="Basic example" className="md-auto">
            <Button variant="secondary">Lunch</Button>
            <Button variant="secondary">Dinner</Button>
          </ButtonGroup>
        </Col>
        
      </Row>
      <Row>
        <Col>
          <h4>Minggu. 7 Februari 2021</h4>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ButtonComponent;
