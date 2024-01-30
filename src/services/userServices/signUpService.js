import { httpRequest } from "../../utils";

const signUpService = async (data) => {
   const res = await httpRequest.post("/register", data);
   return res;
};

export default signUpService;
