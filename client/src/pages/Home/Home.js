import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import PollyAudio from "../../components/polly";


class Home extends Component {

    render() {
        return (
            <div>
                <Nav/>
                <Jumbotron />
                <h1>Home Page</h1>
                <PollyAudio/>
            </div>
        )
    }
};

export default Home;