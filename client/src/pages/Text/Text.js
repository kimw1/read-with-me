import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import InputField from "../../components/InputField";
import { Container } from "../../components/Grid";
import API from "../../utils/API"

class Text extends Component {
  state = {
    item: {}
  };

  componentDidMount() {
    API.getItem(this.props.match.params.id)
      .then(res => this.setState({ item: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav />
        <Container>
          <h1>Text Page</h1>
          <InputField />
          <p>{this.state.item.text}</p>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Text;
