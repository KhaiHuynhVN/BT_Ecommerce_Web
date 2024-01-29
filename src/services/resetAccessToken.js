import { httpRequest } from "../utils";
import { X_USER_REFRESH_TOKEN } from "../utils/commonConstants/constants";

const resetAccessToken = async () => {
   const config = {
      headers: {
         [X_USER_REFRESH_TOKEN]: localStorage.getItem("refreshToken"),
      },
   };

   try {
      const res = await httpRequest.post("/refresh-token", null, config);
      return res;
   } catch (err) {
      console.error("err catched: ", err);
   }
};

export default resetAccessToken;
