import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Container, Row, Col } from "../../components/Grid";
import PollyContainer from "../../utils/polly";
import API from "../../utils/API"

const submitButtonStyle = {
  "float": "right"
}

const uploadButtonStyle = {
  "marginLeft": "15px"
}

class Text extends Component {
  state = {
    libraries: {}
  };

  render() {
    return (
      <div>
        <Nav />

        <Container>

          <Row>
            <Col size="md-12">
              <h1>Convert your text to lifelike speech.</h1>
            </Col>
          </Row>

          <br />
          <Row>
            <Col size="md-12">
              <div className="card-deck">

                <div className="card mb-3">
                  <div className="card-header">Upload document or enter text here</div>
                  <div className="card-body">
                    <h5 className="card-title">File upload</h5>
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                        <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                      </div>
                      <div className="input-group-append">
                        <button className="btn btn-dark" type="button" id="inputGroupFileAddon04" style={uploadButtonStyle}>Upload</button>
                      </div>
                    </div>

                    <br />
                      <PollyContainer />
                    {/* <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1"><h5>Enter text:</h5></label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark" style={submitButtonStyle}>Submit</button> */}
                  </div>
                </div>

                <div className="card border-success mb-3">
                  <div className="card-header">Now reading</div>
                  <div className="card-body text-success">
                    <p className="card-text"></p>
                  </div>
                </div>

              </div>
            </Col>
          </Row>

        </Container>


        {/*
        <Container>
          <Row>
            <div className="col col-lg6">
              <h1>Text Page</h1>
              <InputField />
              <PollyContainer />
            </div>
            <div className="col col-lg6 align-self-center justify-items-right">
            <p>{this.state.item.text}</p>
            </div>
          </Row>
          <Footer />
        </Container>
        */}
      </div>
    )
  };
};

export default Text;
