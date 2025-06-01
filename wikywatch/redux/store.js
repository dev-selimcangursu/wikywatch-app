import { configureStore } from "@reduxjs/toolkit";
import appsReducer from "./slices/appsSlice";
import salesPointsReducer from "./slices/salesPointsSlice";
import notificationsReducer from "./slices/notificationsSlice";
import productReducer from "./slices/productSlice";
import faultCategoryReducer from "./slices/faultCategorySlice";
import boxContentReducer from "./slices/boxContentSlice";

export const store = configureStore({
  reducer: {
    apps: appsReducer,
    salesPoints: salesPointsReducer,
    notifications: notificationsReducer,
    products: productReducer,
    faultCategories: faultCategoryReducer,
    boxContent: boxContentReducer,
  },
});
