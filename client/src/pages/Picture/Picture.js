import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Container, Col, Row } from "../../components/Grid";
import PollyContainer from "../../utils/polly";
import RekognitionContainer from "../../utils/rekognition";

class Picture extends Component {

    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1>Hear your photo read to you.</h1>
                        </Col>
                    </Row>

                    <br />
                    <Row>
                        <Col size="md-12">
                            <div className="card-deck">
                                <div className="card mb-6">
                                    <div className="card-header">Upload an image here</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Image upload</h5>
                                        <RekognitionContainer />
                                    </div>
                                </div>

                                <div className="card border-success mb-6">
                                    <div className="card-header">Now reading</div>
                                    <div className="card-body text-success">
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col size="md-12">
                            <div className="card-deck">
                                <div className="card border-success mb-12">
                                    <div className="card-header">Text</div>
                                    <div className="card-body text-success">
                                        <PollyContainer />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Footer />
                </Container>

            </div>
        )
    }
};

export default Picture;