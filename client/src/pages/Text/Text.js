import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import BrowseButton from "../../components/BrowseButton";
import InputField from "../../components/InputField";
import { Container, Col, Row } from "../../components/Grid";
import PollyContainer from "../../utils/polly";

class Text extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <h1>Text Page</h1>
          <InputField />
          <PollyContainer />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Text;
