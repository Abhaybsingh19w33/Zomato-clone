import React, { Fragment } from "react";
// useParams - it can access url parameters
import { useParams } from "react-router-dom";

const Master = () => {
    // extracting type parameter from url
    const { type } = useParams();

    return <Fragment>{type}</Fragment>;
};

export default Master;