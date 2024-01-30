import { httpRequest } from "../../utils";

const confirmResetPassword = async (data) => {
   const res = await httpRequest.post("/reset-password/confirm", data);
   return res;
};

export default confirmResetPassword;
