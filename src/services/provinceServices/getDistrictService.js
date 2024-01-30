import { httpRequest } from "../../utils";

const getDistrictService = async (id) => {
   const res = await httpRequest.get(import.meta.env.VITE_DISTRICT_API + id);
   return res;
};

export default getDistrictService;
