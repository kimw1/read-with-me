import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import BrowseButton from "../../components/BrowseButton";
import InputField from "../../components/InputField";
import { Container, Col, Row } from "../../components/Grid";

class Text extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <h1>Text Page</h1>
          <InputField />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Text;
