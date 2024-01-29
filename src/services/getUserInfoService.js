import { httpRequest } from "../utils";

const getUserInfo = async () => {
   try {
      const res = await httpRequest.get("/users/user-info");
      return res;
   } catch (err) {
      console.error("err catched: ", err);
   }
};

export default getUserInfo;
