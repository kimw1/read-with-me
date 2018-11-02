import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../utils/images/logo.png';

const imgStyle = {
  height: "25%",
  width: "25%"
};

export default class Nav extends Component {

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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/library">
                  Library
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/text">
                  Text
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/picture">
                  Picture
                  </Link>
              </li>
            </ul>

            {/*BS STARTS HERE*/}
            {this.props.user ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Welcome, {this.props.user}!
                  </Link>
                </li>
              </ul>) :
              (<ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    |
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/login">
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
        </div>

      </nav >
    );
  }
}


