import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import classnames from "classnames";

const MobileTabs = () => {
    // useState - Returns a stateful value, and a function to update it.
    // we can name them anything we want
    // allTypes will store all the states
    const [allTypes, setAllTypes] = useState([
        {
            id: "delivery",
            icon: <RiShoppingBag3Line />,
            name: "Delivery"
        },
        {
            id: "dining",
            icon: <IoFastFoodOutline />,
            name: "Dining Out"
        },
        {
            id: "night",
            icon: <BiDrink />,
            name: "Night life"
        },
        {
            id: "nutri",
            icon: <IoNutritionOutline />,
            name: "Nutrition"
        },
    ]);

    const { type } = useParams();
    return (
        <Fragment>
            {/* bg-white */}
            {/* p-3 - padding of 3 */}
            {/* fixed - fixed at a place */}
            {/* bottom-0 - align at bottom and by fixed, it is fixed at bottom */}
            {/* w-full */}
            {/* z-10 - to make it look like float button */}
            {/* border */}
            {/* flex */}
            {/* justify-between - to sprean element to whole width */}

            {/* md - for medium screen size */}
            {/* justify-evenly - spread evenly from all sides */}
            {/*  */}

            <div className="bg-white p-3 fixed bottom-0 w-full z-10 text-gray-500 border flex justify-between md:justify-evenly lg:hidden">
                {/* now iterating over all the states */}
                {/* if any item.id matches with type then render the component with that item data*/}
                {allTypes.map((items) => (
                    <Link to={`/${items.id}`}>
                        {/* flex */}
                        {/* text-xl - to look the icon size bigger */}
                        {/* flex-col align items in vertical manner */}
                        <div
                            className={
                                type === items.id
                                    ? "flex flex-col relative items-center text-xl text-zomato-400 "
                                    : "flex flex-col items-center text-xl "
                            }
                        >
                            <div
                                className={
                                    type === items.id &&
                                    "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                                }
                            />
                            {items.icon}
                            <h5 className="text-sm">{items.name}</h5>
                        </div>
                    </Link>
                ))}
            </div>
        </Fragment>
    );
};
const LargeTabs = () => {
    const [allTypes, setAllTypes] = useState([
        {
            id: "delivery",
            imageDefault:
                "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            imageActive:
                "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            name: "Delivery",
            activeColor: "yellow",
        },
        {
            id: "dining",
            imageDefault:
                "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            imageActive:
                "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            activeColor: "blue",

            name: "Dining Out",
        },
        {
            id: "night",
            imageDefault:
                "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            imageActive:
                "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            activeColor: "purple",

            name: "Night life",
        },
        {
            id: "nutri",
            imageDefault:
                "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
            imageActive:
                "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
            activeColor: "yellow",

            name: "Nutrition",
        },
    ]);

    const { type } = useParams();
    return (
        <Fragment>
            <div className="hidden lg:flex gap-14 container px-20 my-8 mx-auto">
                {allTypes.map((items) => (
                    <Link to={`/${items.id}`}>
                        {/* classnames - first parameter is default value */}
                        {/* second parameter is key value pair key is the classname we want to render and pair value is the condition we want to check*/}
                        <div
                            className={classnames(
                                "flex items-center gap-3 pb-2 transition duration-700 ease-in-out",
                                {
                                    "border-b-2 border-zomato-400": type === items.id,
                                }
                            )}
                        >
                            <div
                                className={classnames(
                                    "w-16 h-16 bg-gray-100 p-4 rounded-full",
                                    { [`bg-${items.activeColor}-100`]: type === items.id }
                                )}
                            >
                                <img
                                    src={
                                        type === items.id ? items.imageActive : items.imageDefault
                                    }
                                    alt="delivery"
                                    className="w-full h-full "
                                />
                            </div>
                            <h3
                                className={
                                    type === items.id
                                        ? "text-xl text-zomato-400"
                                        : "text-xl text-gray-700"
                                }
                            >
                                {items.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </Fragment>
    );
};

const FoodTab = () => {
    return (
        <Fragment>
            <div>
                <MobileTabs />
                <LargeTabs />
            </div>
        </Fragment>
    );
};

export default FoodTab;