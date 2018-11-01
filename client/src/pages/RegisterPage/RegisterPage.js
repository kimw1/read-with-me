import React, { Component } from "react";
import RegisterComponent from "../../components/RegisterComponent";
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"


class RegisterPage extends Component {

    render() {
        return (
            <div>
                <Nav />
                <RegisterComponent/> 
                <Footer />               
            </div>
        )
    }
};

export default RegisterPage;