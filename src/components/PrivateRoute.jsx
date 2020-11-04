import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.token);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
