import { httpRequest } from "../../utils";

const signInService = async (data) => {
   const res = await httpRequest.post("/login", data);
   return res;
};

export default signInService;
