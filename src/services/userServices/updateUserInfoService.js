import { httpRequest } from "../../utils";

const updateUserInfoService = async (data) => {
   const res = await httpRequest.put("/users/contact-info", data);
   return res;
};

export default updateUserInfoService;
