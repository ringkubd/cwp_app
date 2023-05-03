import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ErrorsReducer} from "../services/reducer/errorReducer";
import ServerReducer from "../services/reducer/serverReducer";
import AuthReducer from "../services/reducer/authReducer";
import {ServerApi} from "../services/rtkQuery/serverApi";
import {setupListeners} from "@reduxjs/toolkit/query";

const middlewares = [
    /* other middlewares */
    ServerApi.middleware,
];

export const rootReducer = combineReducers({
    server: ServerReducer,
    error: ErrorsReducer,
    auth: AuthReducer,
    [ServerApi.reducerPath] : ServerApi.reducer
})

if (__DEV__) {
    const createDebugger = require("redux-flipper").default;
    middlewares.push(createDebugger());
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ immutableCheck: false,
        serializableCheck: false,}).concat(middlewares)
})

setupListeners(store.dispatch)
export default store;
