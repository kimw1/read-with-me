import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage";
import Library from "./pages/Library";
import Picture from "./pages/Picture";
import Text from "./pages/Text";


// import PrivateRoute from "./utils/PrivateRoute";
// import './App.css';

// function onAuthRequired({ history }) {
//   history.push("/login");
// }

// const checkAuth = () => {

// }

// constAuthRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       checkAuth.isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{pathname: "/login", state: { from: props.location }}}
// />
//       )}
//   />
// );

const App = () => (
  <Router>
    {/* <Security
        issuer="https://dev-544560.oktapreview.com/oauth2/default"
        client_id="0oafhkg1yupTnPW9z0h7"
        redirect_uri={window.location.origin + '/implicit/callback'}
        onAuthRequired={onAuthRequired}
      > */}
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/text" component={Text} />
        <Route exact path="/image" component={Image} />
        {/* <PrivateRoute userAuthed={true} exact={true} path="/" RouteComponent={Home} /> */}
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/library" exact={true} component={Library} />
        <Route path="/text" exact={true} component={Text} />
        <Route path="/picture" exact={true} component={Picture} />
        {/* <SecureRoute path="/library" exact={true} component={Library} />
          <Route
            path="/login"
            render={() => (
              <LoginPage baseUrl="dev-544560.oktapreview.com" />
            )}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
           */}
      </Switch>
    </div>
    {/* </Security> */}
  </Router>
);

export default App;