import { combineReducers } from "redux";

import restaurant from "./restaurant/restaurant.reducer";
import image from "./Image/Image.reducer";

// it combines several reducers
const rootReducer = combineReducers({ restaurant, image });

export default rootReducer;