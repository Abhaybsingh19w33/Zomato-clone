import React, { Fragment } from "react";

const NutritionCard = ({ image, title }) => {
    return (
        <Fragment>
            <div className="bg-white shadow rounded-md w-24 h-full px-3 md:px-4 md:w-56 lg:mx-auto">
                <div className="w-full h-12 md:h-36">
                    <img
                        src={image}
                        alt="food"
                        className="w-full h-full object-cover rounded-t-md"
                    />
                </div>
                <div>
                    <h3 className="text-sm my-1 text-center font-light md:text-xl">
                        {title}
                    </h3>
                </div>
            </div>
        </Fragment>
    );
};

const NutritionCarousalCard = (props) => {
    return (
        <Fragment>
            <NutritionCard {...props} />
        </Fragment>
    );
};

export default NutritionCarousalCard;