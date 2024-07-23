import { Middleware } from '@reduxjs/toolkit';
import { loading, success, error } from './features/UiSlice';

const asyncActionMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action: any) => {
    const { payload } = action;

    if (action.type.endsWith('/pending')) {
      dispatch(loading());
    }

    if (action.type.endsWith('/fulfilled')) {
      dispatch(success(payload));
    }

    if (action.type.endsWith('/rejected')) {
      dispatch(error(payload));
    }
    return next(action);
  };

export default asyncActionMiddleware;
