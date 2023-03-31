import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./features/bankSlice";

const store = configureStore({
  reducer: {
    bank: bankSlice
  }
})

export default store