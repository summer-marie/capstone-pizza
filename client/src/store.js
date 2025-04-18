import { configureStore } from "@reduxjs/toolkit"
import orderReducer from "./redux/orderSlice"

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
})
