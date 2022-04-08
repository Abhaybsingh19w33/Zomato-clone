import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Layout
import CheckoutLayout from "../Layout/Checkout.layout";

const CheckoutLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <Fragment>
            <Route
                {...rest}
                component={(props) => (
                    <CheckoutLayout>
                        <Component {...props} />
                    </CheckoutLayout>
                )}
            />
        </Fragment>
    );
};

export default CheckoutLayoutHOC;