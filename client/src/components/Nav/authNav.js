import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../utils/images/logo.png';

const imgStyle = {
    height: "25%",
    width: "25%"
};

export default class AuthNav extends Component {

    render() {
        return (

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" style={imgStyle} />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    {/*BS STARTS HERE*/}
                    {this.props.user ? (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Welcome, {this.props.name}!
                  </Link>
                            </li>
                        </ul>) :
                        (<ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                  </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Login
                  </Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                    Register
                  </Link>
                            </li>
                        </ul>
                        )}
                    {/*END OF BS*/}


                </div>
            </nav >
        );
    }
}