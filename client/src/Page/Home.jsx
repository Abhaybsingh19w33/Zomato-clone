import React, { Fragment } from "react";
// useParams - it can access url parameters
import { useParams } from "react-router-dom";

// components
import Delivery from "../Components/Delivery";
import Dining from "../Components/Dining";
import NightLife from "../Components/NightLife";
import Nutrition from "../Components/Nutrition";

const Home = () => {
    // extracting type parameter from url
    const { type } = useParams();
    return (
        <Fragment>
            <div className="my-5">
                {type === "delivery" && <Delivery />}
                {type === "dining" && <Dining />}
                {type === "night" && <NightLife />}
                {type === "nutri" && <Nutrition />}
            </div>
        </Fragment>
    );
};

export default Home;