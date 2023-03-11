import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { mortyApi } from './api/mortyApi';

const store = configureStore({
  reducer: {
    [mortyApi.reducerPath]: mortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mortyApi.middleware),
});

setupListeners(store.dispatch);

export default store;
