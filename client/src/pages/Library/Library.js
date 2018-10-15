import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";

class Library extends Component {

    render() {
        return (
            <div>
                <Nav/>
                <Jumbotron />
                <h1>Library Page</h1>
            </div>
        )
    }
};

export default Library;