import { createSlice } from "@reduxjs/toolkit";

const productNavSlice = createSlice({
   name: "productNav",
   initialState: {
      isShowProductNav: false,
      navChild1: [],
      navChild2: [],
   },
   reducers: {
      setShowProductNav(state, action) {
         state.isShowProductNav = action.payload;
      },
      setNavChild1(state, action) {
         state.navChild1.includes(action.payload)
            ? (state.navChild1 = state.navChild1.filter((item) => item !== action.payload))
            : state.navChild1.push(action.payload);
      },
      setNavChild2(state, action) {
         state.navChild2.includes(action.payload)
            ? (state.navChild2 = state.navChild2.filter((item) => item !== action.payload))
            : state.navChild2.push(action.payload);
      },
      resetMenu(state) {
         state.isShowProductNav = false;
         state.navChild1 = [];
         state.navChild2 = [];
      },
   },
});

export default productNavSlice;
