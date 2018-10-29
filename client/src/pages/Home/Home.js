import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import { LibraryList, LibraryListItem } from "../../components/List"
import API from "../../utils/API";
import { Link } from "react-router-dom";

import DeleteButton from "../../components/DeleteButton";


import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";

import signs from "../../utils/images/tokyo-1.png";

class Home extends Component {
  state = {
    libraries: [],
    text: ""
  };

  componentDidMount() {
    this.loadLibrary();
  }

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loadLibrary())
      .catch(err => console.log(err));
  };

  loadLibrary = () => {
    API.getLibrary()
      .then(res => 
        this.setState({ libraries: res.data, text: "" })
        )
        .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Nav />
        {/*
                <Jumbotron title="ELUCIDATE YOUR SURROUNDINGS." src={signs}>More comfortable listening than reading? Our cutting-edge app supports image-to-voice conversion and even translation between languages.
        </ Jumbotron>
        */}
        <Carousel />

        <Container>
          <Row>
            <Col size="md-12">
              <h1>HOW IT WORKS</h1>
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              <Card />
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default Home;
