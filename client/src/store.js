import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from './redux.ordersSlice'

export const store = configureStore({
  reducer: {
      orders: ordersReducer,

  }
})