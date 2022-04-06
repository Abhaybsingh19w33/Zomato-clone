import React, { Fragment } from "react";
// useParams - it can access url parameters
import { useParams } from "react-router-dom";

// components
import Delivery from "./Delivery";
import Dining from "./Dining";
import NightLife from "./NightLife";

const Master = () => {
    // extracting type parameter from url
    const { type } = useParams();

    return (
        <Fragment>
            <div className="my-5">
                {type === "delivery" && <Delivery />}
                {type === "dining" && <Dining />}
                {type === "night" && <NightLife />}
            </div>
        </Fragment>
    );
};

export default Master;