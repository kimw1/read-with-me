import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import TranslateButton from "../../components/TranslateButton";
import BrowseButton from "../../components/BrowseButton";
import DisplayButton from "../../components/DisplayButton";
import Image from "../../components/Image";
<<<<<<< HEAD
import { Container } from "../../components/Grid";
=======
import { Container, Col, Row } from "../../components/Grid";
import PollyContainer from "../../utils/polly";
>>>>>>> master

class Picture extends Component {

    render() {
        return (
            <div>
                <Nav/>
                <Container>
                <h1>Photo</h1>
                <TranslateButton/>
                <BrowseButton/>
                <DisplayButton/>
                <Image/>
                <PollyContainer/>
                <Footer/>
                </Container>
             
            </div>
        )
    }
};

export default Picture;