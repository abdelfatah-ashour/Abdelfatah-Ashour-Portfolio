import {createSlice} from "@reduxjs/toolkit";

const menuState = createSlice({
  name: "menuState",
  initialState: false,
  reducers: {
    SHOW_MENU: function (state) {
      return (state = true);
    },
    HIDE_MENU: function (state) {
      return (state = false);
    },
  },
});

export const menuStateReducer = menuState.reducer;

export const {SHOW_MENU, HIDE_MENU} = menuState.actions;
