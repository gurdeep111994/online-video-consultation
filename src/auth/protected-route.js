import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from "../containers/header";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isUserExists = !!localStorage.getItem("authToken");
    return <Route {...rest} render={(props) => (
        isUserExists ? (
            <Fragment>
                <Header />
                <Component {...props} />
            </Fragment>
        ) : <Redirect to="/login" />
    )} />
}

export default ProtectedRoute;