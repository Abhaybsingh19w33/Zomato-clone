import React from "react";

// components
import NutritionCarousal from "./NutritionCarousal";
import NutritionHeroCarousal from "./NutritionHeroCarousal";

const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousal />
            <div className="my-6">
                <NutritionCarousal />
            </div>
        </div>
    );
};

export default Nutrition;