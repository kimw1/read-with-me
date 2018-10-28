import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Container, Row } from "../../components/Grid";
import PollyContainer from "../../utils/polly";

class Text extends Component {
  state = {
    item: {}
  };

  // componentDidMount() {
  //   API.getItem(this.props.match.params.id)
  //     .then(res => this.setState({ item: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Row>
            <div className="col col-lg6">
              <h1>Text Page</h1>
              <PollyContainer />
            </div>
            <div className="col col-lg6 align-self-center justify-items-right">
            <p>{this.state.item.text}</p>
            </div>
          </Row>

          <Footer />
        </Container>
      </div>
    );
  }
}

export default Text;
