import { createStore, applyMiddleware } from "redux";
// to support async await we need thunk
import thunk from "redux-thunk";

import rootReducer from "./Reducer/rootReducer";

// redux middlewares
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
    const { logger } = require("redux-logger");

    middlewares.push(logger);
}

// createStore simply create store
// now passing rootReducers as registerd functions
// {} it is initial_state passed to create the store
//  third parameter - enhancers also known as middlewares
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export default store;