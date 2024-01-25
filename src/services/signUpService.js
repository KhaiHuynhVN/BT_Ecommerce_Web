import { httpRequest } from "../utils";

const signUpService = async (data) => {
   try {
      const res = await httpRequest.post("/register", data);
      return res;
   } catch (err) {
      console.error("err catched: ", err);
   }
};

export default signUpService;
