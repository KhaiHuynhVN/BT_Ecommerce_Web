import axios from "axios";

const httpRequest = axios.create({
   // baseURL: import.meta.env.VITE_BASE_URL,
});

// Add a request interceptor
httpRequest.interceptors.request.use(
   function (config) {
      // Do something before request is sent
      // For example, you can add authorization headers here
      // config.headers.Authorization = `Bearer ${token}`;
      return config;
   },
   function (error) {
      // Do something with request error
      return Promise.reject(error);
   },
);

// Add a response interceptor
httpRequest.interceptors.response.use(
   function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
   },
   function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
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
