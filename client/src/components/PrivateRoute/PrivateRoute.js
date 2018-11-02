import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  console.log(auth);
  return  (
  <Route
    {...rest}
    render={props =>
    true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};


export default PrivateRoute;