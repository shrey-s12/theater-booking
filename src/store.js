import { configureStore } from '@reduxjs/toolkit';
import seatsReducer from "./slices/seatsSlice"

const store = configureStore({
  reducer: {
    seatsKeyInStore: seatsReducer,
  },
});

export default store;
