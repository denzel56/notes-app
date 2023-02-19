import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import noteSlice from "./noteSlice";


export const store = configureStore({
  reducer: {
    modal: modalSlice,
    note: noteSlice
  }
})
