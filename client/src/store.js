import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./redux/orderSlice";
import ingredientReducer from "./redux/ingredientSlice";
import builderReducer from "./redux/builderSlice";
import authReducer from "./redux/authSlice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    ingredient: ingredientReducer,
    builder: builderReducer,
    auth: authReducer,
  },
});
