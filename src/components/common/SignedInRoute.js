import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const SignedInRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        window.gapi && window.gapi.auth2.getAuthInstance().isSignedIn.get()
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
    )} />
  )

  export default SignedInRoute;