import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Layout
import HomeLayout from "../Layout/Home.layout";

const HomeLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <Fragment>
            <Route
                {...rest}
                component={(props) => (
                    <HomeLayout>
                        <Component {...props} />
                    </HomeLayout>
                )}
            />
        </Fragment>
    );
};

export default HomeLayoutHOC;