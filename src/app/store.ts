import { userSlice } from "@/features";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: userSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
