import { httpRequest } from "../../utils";

const resetPasswordService = async (data) => {
   const res = await httpRequest.post("/reset-password", data);
   return res;
};

export default resetPasswordService;
