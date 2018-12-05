import React, { Component } from "react";
import RegisterComponent from "../../components/RegisterComponent";
import AuthNav from "../../components/Nav/authNav"
import Footer from "../../components/Footer"

class RegisterPage extends Component {
    render() {
        return (
            <div>
                <AuthNav />
                <RegisterComponent/> 
                <Footer />               
            </div>
        )
    }
};

export default RegisterPage;