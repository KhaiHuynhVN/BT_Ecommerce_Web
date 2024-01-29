import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   token: "",
   refreshToken: "",
   userData: JSON.parse(localStorage.getItem("userData")) || {},
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setToken: (state, action) => {
         state.token = action.payload;
         localStorage.setItem("accessToken", action.payload);
      },
      setRefreshToken: (state, action) => {
         state.refreshToken = action.payload;
         localStorage.setItem("refreshToken", action.payload);
      },
      setUserData: (state, action) => {
         state.userData = action.payload;
         localStorage.setItem("userData", JSON.stringify(action.payload));
      },
      clearUserData: (state) => {
         state.refreshToken = "";
         state.token = "";
         state.userData = {};
         localStorage.removeItem("userData");
         localStorage.removeItem("accessToken");
         localStorage.removeItem("refreshToken");
      },
   },
});

export default authSlice;
