import React, { Component } from "react";
import { Col, Row, Navbar, Image, Modal, Button } from "react-bootstrap";
import ModalLocation from "./ModalLocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faAngleDown } from "@fortawesome/free-solid-svg-icons";


export default class NavbarComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
        showModal: false,
    }
}

handleShow = () => {
  this.setState({
      showModal: true,
  })
}

handleClose = () => {
  this.setState({
      showModal: false,
  })
}

  render() {

    return (
      <Navbar className="ininavbar" expand="lg" onClick={() => this.handleShow()}>
        <Navbar.Brand href="#home">
          <div><p>
          <FontAwesomeIcon icon={faArrowLeft} className="mr-3"></FontAwesomeIcon>
          Kulina Office
          <FontAwesomeIcon icon={faAngleDown} className="ml-2" color="#f9423a"></FontAwesomeIcon></p>
          </div>
        </Navbar.Brand>

        {this.state.showModal ? 
        <ModalLocation 
          handleClose={this.handleClose}
        /> : null }
      </Navbar>
    );
  }
}
