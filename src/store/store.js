import { configureStore } from "@reduxjs/toolkit";

import productNavSlice from "../layouts/components/Header/components/ProductNav/productNavSlice";
import authSlice from "./authSlice";

const store = configureStore({
   reducer: {
      productNav: productNavSlice.reducer,
      auth: authSlice.reducer,
   },
});

export default store;
