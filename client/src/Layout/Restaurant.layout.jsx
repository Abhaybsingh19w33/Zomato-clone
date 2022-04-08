import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import InfoButtons from "../Components/restaurant/InfoButtons";
import RestaurantInfo from "../Components/restaurant/RestaurantInfo";
import TabContainer from "../Components/restaurant/Tabs";
import CartContainer from "../Components/Cart/CartContainer";

// Redux actions
import { getSpecificRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";
import { getImage } from "../Redux/Reducer/Image/Image.action";

const RestaurantLayout = (props) => {

    const [restaurant, setRestaurant] = useState({
        images: [],
        name: "",
        cuising: "",
        address: "",
    });
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificRestaurant(id)).then((data) => {
            setRestaurant((prev) => ({
                ...prev,
                ...data.payload.restaurant,
            }));

            dispatch(getImage(data.payload.restaurant.photos)).then((data) =>
                setRestaurant((prev) => ({ ...prev, ...data.payload.image }))
            );
        });
    }, []);


    return (
        <Fragment>
            {" "}
            <RestaurantNavbar />
            <div className="container mx-auto px-4 lg:px-20 pb-10">
                {/* <ImageGrid
                    images={[
                        "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
                        "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
                        "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
                        "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
                        "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
                    ]}
                /> */}
                <ImageGrid images={restaurant.images} />
                {/* <RestaurantInfo
                    name="Mumbai Xpress"
                    restaurantRating="3.5"
                    deliveryRating="3.2"
                    cuisine="North Indian, Fast Food, Chinese, Street Food"
                    address="Basavanagudi, Bangalore"
                /> */}
                <RestaurantInfo
                    name={restaurant?.name}
                    restaurantRating={restaurant?.rating || 0}
                    deliveryRating={restaurant?.rating || 0}
                    cuisine={restaurant?.cuising}
                    address={restaurant?.address}
                />
                <div className="my-4 flex flex-wrap gap-3">
                    <InfoButtons isActive>
                        <TiStarOutline /> Add Review
                    </InfoButtons>
                    <InfoButtons>
                        <RiDirectionLine /> Direction
                    </InfoButtons>
                    <InfoButtons>
                        <BiBookmarkPlus /> Bookmark
                    </InfoButtons>
                    <InfoButtons>
                        <RiShareForwardLine /> Share
                    </InfoButtons>
                </div>
                <div className="my-10">
                    <TabContainer />
                </div>
                <div className="relative">{props.children}</div>
            </div>
            <CartContainer />
        </Fragment>
    );
};

export default RestaurantLayout;