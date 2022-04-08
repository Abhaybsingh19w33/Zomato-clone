import { GET_RESTAURANT } from "./restaurant.type";

const INITIAL_STATE = {
    restaurants: [],
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

        default:
            return {
                ...state,
            };
    }
};

export default restaurantReducer;