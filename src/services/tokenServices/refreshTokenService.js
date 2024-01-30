import { httpRequest } from "../../utils";
import { X_USER_REFRESH_TOKEN } from "../../utils/commonConstants";

const refreshTokenService = async () => {
   const config = {
      headers: {
         [X_USER_REFRESH_TOKEN]: localStorage.getItem("refreshToken"),
      },
   };

   const res = await httpRequest.post("/refresh-token", null, config);
   return res;
};

export default refreshTokenService;
