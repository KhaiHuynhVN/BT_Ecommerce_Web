import axios from "axios";

import checkToken from "../checkToken";
import { tokenServices } from "../../services";
import routesConfig from "../../routesConfig";
import store from "../../store";
import { X_USER_ACCESS_TOKEN } from "../commonConstants";

const httpRequest = axios.create({
   baseURL: import.meta.env.VITE_BASE_URL,
});

// Add a request interceptor
httpRequest.interceptors.request.use(
   function (config) {
      // Retrieve your access token from storage (local storage, cookies, etc.)
      const token = localStorage.getItem("accessToken");
      if (token) {
         config.headers[X_USER_ACCESS_TOKEN] = token;
      }
      return config;
   },
   function (error) {
      return Promise.reject(error);
   },
);

// Add a response interceptor
httpRequest.interceptors.response.use(
   function (response) {
      return response;
   },
   async function (error) {
      function updateReduxState() {
         const action = {
            type: "auth/clearUserData",
         };
         store.dispatch(action);
      }

      const refreshToken = localStorage.getItem("refreshToken");
      const accessToken = localStorage.getItem("accessToken");

      if (refreshToken && !checkToken(refreshToken)) {
         try {
            updateReduxState();
            console.log("đã đăng xuất");
            window.open(routesConfig.signIn.path, "_self");
         } catch (err) {
            console.error("!!!!!httpRequest: ", err);
         }
      } else if (refreshToken && accessToken && checkToken(refreshToken) && !checkToken(accessToken)) {
         try {
            const res = await tokenServices.refreshTokenService();
            if (res) {
               localStorage.setItem("accessToken", res.data.accessToken);
               localStorage.setItem("refreshToken", res.data.refreshToken);
               console.log("đã refresh token");
               return httpRequest(error.config);
            }
         } catch (error) {
            console.error("!!!!!httpRequest: ", error);
         }
      } else if (!refreshToken || !accessToken) {
         updateReduxState();
      }
      return Promise.reject(error);
   },
);

const get = async (path, option = {}, config = {}) => {
   const response = await httpRequest.get(path, option, config);
   return response;
};

const post = async (path, option = {}, config = {}) => {
   const response = await httpRequest.post(path, option, config);
   return response;
};

const patch = async (path, option = {}, config = {}) => {
   const response = await httpRequest.patch(path, option, config);
   return response;
};

const put = async (path, option = {}, config = {}) => {
   const response = await httpRequest.put(path, option, config);
   return response;
};

const deleteMethod = async (path, option = {}, config = {}) => {
   const response = await httpRequest.delete(path, option, config);
   return response;
};

export { get, post, patch, put, deleteMethod };
