import { configureStore } from "@reduxjs/toolkit"
import orderReducer from "./redux/orderSlice"
import ingredientReducer from "./redux/ingredientSlice"

export const store = configureStore({
  reducer: {
    order: orderReducer,
    ingredient: ingredientReducer,
  },
})
