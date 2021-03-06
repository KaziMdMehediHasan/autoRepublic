import React from 'react';
import {
    Route,
    Redirect,
  } from "react-router-dom";
import useAuth from '../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
  const {user, admin,isLoading} = useAuth();
  
  if(!admin || isLoading) {
        return (
          <div class="d-flex align-items-center">
            <strong className="text-light">Access Bound to Admin Only! Click On Dashboard Home</strong>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
          </div>
           )
}
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;