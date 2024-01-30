import { httpRequest } from "../../utils";

const signOutService = async () => {
   const res = await httpRequest.deleteMethod("/users/logout");
   return res;
};

export default signOutService;
