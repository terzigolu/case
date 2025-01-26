import { Middleware } from '@reduxjs/toolkit';
import { isAnyOf, isPending, isFulfilled, isRejected } from '@reduxjs/toolkit';
import { fakeStoreApi } from '../services/fakeStoreApi';
import { startLoader, endLoader } from '../slices/loadingSlice';

const apiActions = Object.values(fakeStoreApi.endpoints).flatMap(
  (endpoint: any) => [endpoint.matchPending, endpoint.matchFulfilled, endpoint.matchRejected].filter(Boolean)
);

const disabledActions = isAnyOf();

export const loaderMiddleware: Middleware = ({ dispatch }) => (next) => (action) => {
  // Eğer action FakeStoreApi'den geliyorsa ve disabled değilse
  if (!disabledActions(action)) {
    if (isPending(action)) {
      dispatch(startLoader());
    }

    if (isFulfilled(action) || isRejected(action)) {
      dispatch(endLoader());
    }
  }

  return next(action);
}; 