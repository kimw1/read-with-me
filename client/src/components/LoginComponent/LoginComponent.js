import React, { Component } from 'react';
import axios from "axios";
import classnames from "classnames";
import "./LoginComponent.css";



class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);    
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    }
// How I had it before
    axios
    .post('/api/users/login', user)
    .then(res => {
      console.log(res.data);
      this.props.userBecameAuthed(); 
      })
    // .catch(err => console.log(err));
    // .catch(err => this.setState({ errors: err.response.data }));
    .catch(err => console.log(err));
    
    
    // axios
    // .post('/api/users/login', user)
    // .then(res => 
    //   console.log(res.data))
    // .catch(err => this.setState({ errors: err.response.data }));
  }
  
  render() {
    const { errors } = this.state;
    
    return (
      <div class="LoginComponent">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <h1 class="display-4 text-center">Log In</h1>
              <p class="lead text-center">
                Sign in to your Read With Me account
              </p>
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <input
                    type="email"
                    class={classnames("form-control form-control-lg", {
                      "is-invalid": errors
                    })}
                    placeholder="Email Address"
                    name="email"
                    value = {this.state.email}
                    onChange = {this.onChange}
                  />
                  {/* {errors.email && (
                    <div class="invalid-feedback">{errors.email}</div>
                  )} */}
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value = {this.state.password}
                    onChange = {this.onChange}
                  />
                  {errors.email && (
                    <div class="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
