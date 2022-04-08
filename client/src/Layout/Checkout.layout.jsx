import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

// components
import Navbar from "../Components/Navbar/checkoutNavBar";

// redux action
import { getCart } from "../Redux/Reducer/Cart/Cart.action";

const CheckoutLayout = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    }, []);

    return (
        <Fragment>
            <Navbar />
            <div className="container mx-auto px-4 lg:px-20 ">{props.children}</div>
        </Fragment>
    );
};

export default CheckoutLayout;