import React, { Component } from "react";
import LoginComponent from "../../components/LoginComponent";
import AuthNav from "../../components/Nav/authNav"
import Footer from "../../components/Footer"

class LoginPage extends Component {

    render() {
        return (
            <div>

         
                

                <AuthNav />    
                <LoginComponent {...this.props} />
                <Footer />

            </div>
        )
    }
};

export default LoginPage;