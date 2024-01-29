import { httpRequest } from "../utils";

const signInService = async (data) => {
   try {
      const res = await httpRequest.post("/login", data);
      return res;
   } catch (err) {
      console.error("err catched: ", err);
   }
};

export default signInService;
