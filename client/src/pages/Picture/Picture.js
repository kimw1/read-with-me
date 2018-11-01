import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import TranslateButton from "../../components/TranslateButton";
import Image from "../../components/Image";
import { Container, Col, Row } from "../../components/Grid";
import PollyContainer from "../../utils/polly";

class Picture extends Component {

    render() {
        return (
            <div>
                <Nav/>
                <Container>
                <h1>Photo</h1>
                <TranslateButton/>
                <Image/>
                <PollyContainer/>
                <Footer/>
                </Container>
             
            </div>
        )
    }
};

export default Picture;