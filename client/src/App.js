import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import PrivateRoute from "./components/PrivateRoute";
import Library from "./pages/Library";

import Picture from "./pages/Picture";
import Text from "./pages/Text";
import { browserHistory } from "react-router";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthed: false
    };

    this.userBecameAuthed = this.userBecameAuthed.bind(this);
  }

  userBecameAuthed() {
    this.setState({ isAuthed: true }, () => {
      console.log(this.state);
      // browserHistory.push('/library');
      return <Redirect to="/library" />;
    });
  }


  render() {
    const { isAuthed: isAuthenticated } = this.state;
    // console.log(this.props);
    console.log(isAuthenticated);
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/register" exact={true} component={RegisterPage} />
        <Route path="/library" exact={true} component={Library} />
        <Route path="/text" exact={true} component={Text} />
        <Route path="/library/:id" exact={true} component={Library} />
        <Route path="/picture" exact={true} component={Picture} />
        { <SecureRoute path="/library" exact={true} component={Library} />

          <Route
            path="/login"
            exact={true}
            component={() => (
              <LoginPage
                userBecameAuthed={this.userBecameAuthed}
                auth={{ isAuthenticated }}
              />
            )}
          />
          <Route path="/register" exact={true} component={RegisterPage} />

          <PrivateRoute
            path="/library"
            auth={{ isAuthenticated }}
            component={Library}
          />

          <Route path="/text" exact={true} component={Text} />
          <Route path="/picture" exact={true} component={Picture} />
        </Switch>
      </Router>
    );
  }
}

export default App;
