import React, { Fragment } from "react";

// components
import Navbar from "../Components/Navbar/checkoutNavBar";

const CheckoutLayout = (props) => {
    return (
        <Fragment>
            <Navbar />
            <div className="container mx-auto px-4 lg:px-20 ">{props.children}</div>
        </Fragment>
    );
};

export default CheckoutLayout;