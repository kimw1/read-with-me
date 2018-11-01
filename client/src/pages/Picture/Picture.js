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
                <Nav/>
                <Container>
                <h1>Photo</h1>
               <RekognitionContainer/>
                <PollyContainer/>
                <Footer/>
                </Container>
             
            </div>
        )
    }
};

export default Picture;