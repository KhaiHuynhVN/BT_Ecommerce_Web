import { configureStore } from "@reduxjs/toolkit";

import productNavSlice from "../layouts/components/Header/components/ProductNav/productNavSlice";

const store = configureStore({
   reducer: {
      productNav: productNavSlice.reducer,
   },
});

export default store;
