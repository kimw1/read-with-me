import React, { Component } from "react";
import LoginComponent from "../../components/LoginComponent";


class LoginPage extends Component {

    render() {
        return (
            <div>
         
                <LoginComponent {...this.props} />
            </div>
        )
    }
};

export default LoginPage;