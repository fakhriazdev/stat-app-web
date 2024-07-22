import { combineReducers, configureStore } from '@reduxjs/toolkit';
import uiSliceReducer from './features/UiSlice';
import authReducer from './features/AuthSlice';
import asyncActionMiddleware from '@/app/lib/asyncActionMiddleware';
import { store } from 'next/dist/build/output/store';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiSliceReducer,
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
