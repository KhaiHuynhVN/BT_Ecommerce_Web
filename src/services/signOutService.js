import { httpRequest } from "../utils";

const signOutService = async () => {
   try {
      const res = await httpRequest.deleteMethod("/users/logout");
      return res;
   } catch (err) {
      console.error("err catched: ", err);
   }
};

export default signOutService;
