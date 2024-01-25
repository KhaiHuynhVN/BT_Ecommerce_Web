import { httpRequest } from "../utils";

const getProvinceService = async () => {
   try {
      const res = await httpRequest.get(import.meta.env.VITE_PROVINCE_API);
      return res;
   } catch (err) {
      console.error("err catched: ", err);
   }
};

export default getProvinceService;
