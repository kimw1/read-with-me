import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import List from "../../components/List";
import Footer from "../../components/Footer";



class Library extends Component {

    render() {
        return (
            <div>
                <Nav/>
                <Jumbotron />
                <h1>Welcome to your library</h1>
                <p>Your Articles: </p>
                <List/>
                <Footer/>
            </div>
        )
    }
};

export default Library;