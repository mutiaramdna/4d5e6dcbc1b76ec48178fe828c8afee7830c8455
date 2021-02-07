import React, { Component } from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import { numberWithCommas } from '../utils/utils'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faPlus, faShoppingCart, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

export default class FoodCards extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       foods: [
          {
            id: 1,
            nama: "Roasted Chicken with Scrambled Egg",
            harga: 35000,
            gambar: "roastedchicken.jpg",
            rating: 4.5
        },
        {
            id: 2,
            nama: "Ramen",
            harga: 30000,
            gambar: "ramen.jpg",
            rating: 4.5
        },
        {
            id: 3,
            nama: "Bibimbap",
            harga: 20000,
            gambar: "bibimbap.jpg",
            rating: 4.5
        }
       ],
       items:0,
       totalBayar:0,
       showButton:false
    }
  }

  tambahItem = () => {
    this.setState({
        items: this.state.items+1,
        showButton: true
    })
  }

  
  render() {
    const { foods, items } = this.state
    return (
      <Col className="mt-4 mb-4">
       {foods && foods.map((food, index) => (
        <Card className="foodcard absolute mb-4">
          <Card.Img variant="top" src={"assets/images/"+food.gambar} />
          <Card.Body>
            <Card.Text>
            {food.rating}
            <FontAwesomeIcon icon={faStar} color="#f9423a" className="ml-2"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#f9423a" className="ml-2"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#f9423a" className="ml-2"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#f9423a" className="ml-2"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStarHalfAlt} color="#f9423a" className="ml-2"></FontAwesomeIcon>
            </Card.Text>
            <Card.Title>{food.nama}</Card.Title>
            <Card.Text>by Kulina<span className="dot ml-2 mr-2"></span>Uptown Lunch</Card.Text>
            <Row>
              <Col>
                <h5>Rp {numberWithCommas(food.harga)}</h5>
              </Col>
              <Col>
                <Button variant="danger" className="float-right addbutton" onClick={this.tambahItem}>
                  ADD
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="ml-2"
                  ></FontAwesomeIcon>
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
       ))}

      {this.state.showButton ? 
      
      <Button variant="primary" className="addcart fixed-bottom mb-2" show={this.state.showButton}>
                  <Row>
                    <Col> 
                    <strong>
                    {items} items | Rp 35.000
                    </strong>
                    <br />
                    Termasuk ongkos kirim
                    </Col>
                    <Col><FontAwesomeIcon
                    icon={faShoppingCart}
                    className="justify-content-center align-self-center"></FontAwesomeIcon><FontAwesomeIcon
                    icon={faAngleRight}
                    className="justify-content-center align-self-center ml-1"></FontAwesomeIcon>
                    </Col>
                  </Row>
                  
                </Button>  : null }

       
      </Col>
    );
  }
}
