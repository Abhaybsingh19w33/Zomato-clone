import { combineReducers } from "redux";

import restaurant from "./restaurant/restaurant.reducer";

// it combines several reducers
const rootReducer = combineReducers({ restaurant });

export default rootReducer;