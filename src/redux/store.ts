import { configureStore } from "@reduxjs/toolkit";
import reducer from "./multimartSlice";

export const store = configureStore({
  reducer: {
    // reducers here
    multimart: reducer,
  },
});
