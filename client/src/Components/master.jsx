import React, { Fragment } from "react";
// useParams - it can access url parameters
import { useParams } from "react-router-dom";

// components
import Delivery from "./Delivery";

const Master = () => {
    // extracting type parameter from url
    const { type } = useParams();

    return (
        <Fragment>
            <div className="my-5">
                {type === "delivery" && <Delivery />}
            </div>
        </Fragment>
    );
};

export default Master;