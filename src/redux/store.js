import {configureStore} from "@reduxjs/toolkit";
import {menuStateReducer} from "./slices";

export const store = configureStore({
  reducer: {
    menuState: menuStateReducer,
  },
});
