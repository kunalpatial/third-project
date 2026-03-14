import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../pages/accesories/Cart/Cartslice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,  
  },
});
