import { httpRequest } from "../../utils";

const changePasswordService = async (data) => {
   const res = await httpRequest.patch("/users/change-password", data);
   return res;
};

export default changePasswordService;
