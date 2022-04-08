import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

const INITIAL_STATE = {
    restaurants: [],
    selectedRestaurant: {},
};

// reducer accepts state and action
// if no state is passed, then the INITIAL_STATE is set as default
const restaurantReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case boby defined here
        case GET_RESTAURANT:
            return {
                ...state,
                restaurants: action.payload,
            };

        case GET_SPECIFIC_RESTAURANT:
            return {
                ...state,
                selectedRestaurant: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default restaurantReducer;