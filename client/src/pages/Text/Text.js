import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Container, Row } from "../../components/Grid";
import PollyContainer from "../../utils/polly";
import API from "../../utils/API"

class Text extends Component {
    state = {  
      libraries: {}
    };


    // componentDidMount() {
    //   API.getItem(this.props.match.params.id)
    //     .then(res => this.setState({ item: res.data }))
    //     .catch(err => console.log(err));
    // };

    render() {
      return (
        <div>
          <Nav />
          <Container>
            <Row>
              <div className="col-md-6 offset-md-3">
                <h1>Text Page</h1>
                <PollyContainer />
              </div>
              {/* <div className="col col-lg6 align-self-center justify-items-right">
                <p>{this.state.item.Text}</p>
              </div> */}
            </Row>

            <Footer />
          </Container>
        </div>
      );
    }
  }

  export default Text;
