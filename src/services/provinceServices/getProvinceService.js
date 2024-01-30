import { httpRequest } from "../../utils";

const getProvinceService = async () => {
   const res = await httpRequest.get(import.meta.env.VITE_PROVINCE_API);
   return res;
};

export default getProvinceService;
