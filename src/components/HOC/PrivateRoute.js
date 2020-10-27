import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.userProps.isAuth === true ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

const mapStateToProps = state => ({
  userProps: state.userState
});

export default connect(mapStateToProps)(PrivateRoute);
