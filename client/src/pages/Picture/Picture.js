import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import TranslateButton from "../../components/TranslateButton";
import BrowseButton from "../../components/BrowseButton";
import DisplayButton from "../../components/DisplayButton";
import Image from "../../components/Image";
import { Container } from "../../components/Grid";

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
                <Footer/>
                </Container>
             
            </div>
        )
    }
};

export default Picture;