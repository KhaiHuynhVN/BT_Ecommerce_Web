import { httpRequest } from "../../utils";

const getUserInfoService = async () => {
   const res = await httpRequest.get("/users/user-info");
   return res;
};

export default getUserInfoService;
