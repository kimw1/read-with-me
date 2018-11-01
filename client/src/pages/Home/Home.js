import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";




import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";


class Home extends Component {



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
