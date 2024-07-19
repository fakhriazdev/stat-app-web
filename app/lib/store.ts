
import {configureStore} from "@reduxjs/toolkit";
import uiSliceReducer from "./features/UiSlice";
import authReducer, { loginAction } from "./features/AuthSlice";
import asyncActionMiddleware from "@/app/lib/asyncActionMiddleware";
import {store} from "next/dist/build/output/store";



const setupStore=() =>
    configureStore({
    reducer: {
        auth: authReducer,
        ui: uiSliceReducer,
    },
        middleware:(getDefaultMiddleware)=>
            getDefaultMiddleware()
                .concat(asyncActionMiddleware)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default setupStore;
