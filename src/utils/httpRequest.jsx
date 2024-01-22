import axios from "axios";

const httpRequest = axios.create({
   baseURL: import.meta.env.VITE_BASE_URL,
});

// Add a request interceptor
httpRequest.interceptors.request.use(
   function (config) {
      // Retrieve your access token from storage (local storage, cookies, etc.)
      const token = localStorage.getItem("accessToken");
      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
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
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
         originalRequest._retry = true;
         // Retrieve your refresh token from storage
         const refreshToken = localStorage.getItem("refreshToken");
         // Make a request to your refresh token endpoint
         const res = await axios.post("/refresh-token", { refreshToken });
         if (res.status === 200) {
            // Update your storage with the new tokens
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);
            // Retry the original request
            return httpRequest(originalRequest);
         } else if (res.status === 403) {
            // Refresh token has expired, redirect to login page
            window.location.href = `${import.meta.env.VITE_BASE_URL}/login}`;
         }
      }
      return Promise.reject(error);
   },
);

const get = async (path, option = {}) => {
   const response = await httpRequest.get(path, option);
   return response.data;
};

const post = async (path, content = {}) => {
   const response = await httpRequest.post(path, content);
   return response.data;
};

const patch = async (path, content = {}) => {
   const response = await httpRequest.patch(path, content);
   return response.data;
};

const put = async (path, content = {}) => {
   const response = await httpRequest.put(path, content);
   return response.data;
};

const deleteAPI = async (path, option = {}) => {
   const response = await httpRequest.delete(path, option);
   return response.data;
};

export { get, post, patch, put, deleteAPI };
