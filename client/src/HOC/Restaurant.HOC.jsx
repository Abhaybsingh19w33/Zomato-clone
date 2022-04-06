import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Layout
import RestaurantLayout from "../Layout/Restaurant.layout";

const RestaurantLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <Fragment>
            <Route
                {...rest}
                component={(props) => (
                    <RestaurantLayout>
                        <Component {...props} />
                    </RestaurantLayout>
                )}
            />
        </Fragment>
    );
};

export default RestaurantLayoutHOC;