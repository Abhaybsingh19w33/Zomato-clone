import React, { Fragment } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";

const MobileTabs = () => {
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
                {/* <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border"> */}

                {/* flex */}
                {/* text-xl - to look the icon size bigger */}
                {/* flex-col align items in vertical manner */}
                <div className="flex flex-col text-xl items-center">
                    {/* <div className="flex flex-col items-center text-xl"> */}
                    <RiShoppingBag3Line />
                    <h5 className="text-sm">Delivery</h5>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <IoFastFoodOutline />
                    <h5 className="text-sm">Dining Out</h5>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <BiDrink />
                    <h5 className="text-sm">Night life</h5>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <IoNutritionOutline />
                    <h5 className="text-sm">Nutrition</h5>
                </div>
            </div>
        </Fragment >
    );
};
const LargeTabs = () => {
    return (
        <Fragment>
            <div className="hidden lg:flex container px-20 mx-auto gap-14">
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
                        <img
                            src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                            alt="delivery"
                            className="w-full h-full "
                        />
                    </div>
                    <h3 className="text-xl text-gray-700 ">Delivery</h3>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
                        <img
                            src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                            alt="delivery"
                            className="w-full h-full "
                        />
                    </div>
                    <h3 className="text-xl text-gray-700 ">Dining Out</h3>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
                        <img
                            src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                            alt="delivery"
                            className="w-full h-full "
                        />
                    </div>
                    <h3 className="text-xl text-gray-700 ">Nightlife</h3>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
                        <img
                            src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png"
                            alt="delivery"
                            className="w-full h-full "
                        />
                    </div>
                    <h3 className="text-xl text-gray-700 ">Nutrition</h3>
                </div>
            </div>
        </Fragment>
    );
};

const FoodTab = () => {
    return (
        <>
            <div>
                <MobileTabs />
                <LargeTabs />
            </div>
        </>
    );
};

export default FoodTab;