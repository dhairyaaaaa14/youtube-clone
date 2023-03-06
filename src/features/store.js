import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./video/videoSlice"
export const store = configureStore({
    reducer: {
      videos: videoSlice,
    },
  });
  