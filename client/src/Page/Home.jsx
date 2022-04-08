import React, { Fragment, useEffect } from "react";
// useParams - it can access url parameters
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import Delivery from "../Components/Delivery";
import Dining from "../Components/Dining";
import NightLife from "../Components/NightLife";
import Nutrition from "../Components/Nutrition";

// redux actions
import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const Home = () => {
    // extracting type parameter from url
    const { type } = useParams();

    const dispatch = useDispatch();

    // this will call the dispatch functions once
    useEffect(() => {
        dispatch(getRestaurant());
    }, []);

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