import { combineReducers, configureStore } from '@reduxjs/toolkit';
import uiSliceReducer from './features/UiSlice';
import authReducer from './features/AuthSlice';
import asyncActionMiddleware from '@/app/lib/asyncActionMiddleware';
import { store } from 'next/dist/build/output/store';
import profileSlice from "@/app/lib/features/profileSlice";
import commentsSlice from "@/app/lib/features/commentsSlice";
import projectSlice from "@/app/lib/features/ProjectSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiSliceReducer,
    profile:profileSlice,
    comment:commentsSlice,
    project:projectSlice,
});
const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(asyncActionMiddleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default setupStore;
