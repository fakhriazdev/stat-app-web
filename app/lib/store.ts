import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "./services/AuthApi";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import authReducer from './features/AuthSlice'
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {Persistor} from "redux-persist/es/types";

const persistConfig = {
    key: "auth",
    storage: storage,
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: persistedAuthReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(
            {
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                }}
        ).concat(

            authApi.middleware
        ),
});

export const persistor:Persistor = persistStore(store)