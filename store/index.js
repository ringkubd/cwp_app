import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ErrorsReducer} from "../services/reducer/errorReducer";
import ServerReducer from "../services/reducer/serverReducer";

const middlewares = [
    /* other middlewares */
];

export const rootReducer = combineReducers({
    server: ServerReducer,
    error: ErrorsReducer
})

if (__DEV__) {
    const createDebugger = require("redux-flipper").default;
    middlewares.push(createDebugger());
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ immutableCheck: false,
        serializableCheck: false,}).concat(middlewares)
})
