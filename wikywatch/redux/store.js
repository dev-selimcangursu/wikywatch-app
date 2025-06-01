import { configureStore } from "@reduxjs/toolkit";
import appsReducer from "./slices/appsSlice";
import salesPointsReducer from "./slices/salesPointsSlice";
import notificationsReducer from "./slices/notificationsSlice";
import productReducer from './slices/productSlice';

export const store = configureStore({
  reducer: {
    apps: appsReducer,
    salesPoints: salesPointsReducer,
    notifications: notificationsReducer,
    products: productReducer,

  },
});
