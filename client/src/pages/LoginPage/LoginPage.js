import React, { Component } from "react";
import LoginComponent from "../../components/LoginComponent";
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

class LoginPage extends Component {

    render() {
        return (
            <div>
                <Nav />        
                <LoginComponent/>
                <Footer />
            </div>
        )
    }
};

export default LoginPage;