import React, { Component } from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import ListDate from "./components/ListDate";
import FoodCards from "./components/FoodCards";
import ButtonComponent from "./components/ButtonComponent";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <ListDate />
        <hr />
        <Container>
        
        <ButtonComponent />
        <FoodCards />
        </Container>
      </div>
    );
  }
}
