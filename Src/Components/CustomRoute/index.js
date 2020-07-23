import React from "react";
import { Route } from "react-router-dom";
import Layout from '../Layout';

export default ({ component: Component, path, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                <Layout>
                    <Component {...props} />
                </Layout>
            }
        />
    );
}
