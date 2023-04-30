import {configureStore} from "@reduxjs/toolkit";
import {ErrorsReducer} from "../services/reducer/errorReducer";

export const store = configureStore({
    reducer: ErrorsReducer
})
