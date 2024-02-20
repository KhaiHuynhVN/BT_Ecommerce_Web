/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-case-declarations */
import classNames from "classnames/bind";
import { forwardRef, useState } from "react";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Input from "../../../../../../components/Input";
import Select from "../../../../../../components/Select";
import { provinceServices } from "../../../../../../services";
import { schema } from "../../../../../../reactHookFormSchema";
import { authSliceSelector } from "../../../../../../store/authSlice";

import styles from "./DeliveryTermsForm.module.scss";

const cx = classNames.bind(styles);

const DeliveryTermsForm = forwardRef(({ onSubmit }, ref) => {
   const [districtDatas, setDistrictDatas] = useState([]);
   const [isDisabled, setIsDisabled] = useState(false);

   const userData = useSelector(authSliceSelector.userData);
   const { address } = userData;
   const addressArr = address?.split(", ");

   const { data: provinceDatas } = useQuery({
      queryKey: ["provinces"],
      queryFn: () => {
         setIsDisabled(true);
         return provinceServices.getProvinceService();
      },
      onSuccess: async (data) => {
         const provinceId = data?.data?.results.find(
            (item) => item.province_name === addressArr?.[addressArr.length - 1],
         )?.province_id;
         const districtDatas = await provinceServices.getDistrictService(provinceId);
         setDistrictDatas(districtDatas?.data?.results);
         setIsDisabled(false);
      },
      onError: (err) => console.log(err),
   });

   const {
      register,
      handleSubmit,
      formState: { errors },
      clearErrors,
      setValue,
      getValues,
      trigger,
   } = useForm({
      resolver: yupResolver(schema.deliveryTermsFormShema),
      defaultValues: {
         fullName: userData?.fullName,
         phoneNumber: userData?.phone.replace("+84", "0"),
         address: userData?.address,
         province: addressArr?.[addressArr.length - 1],
         district: addressArr?.[addressArr.length - 2],
         note: "",
      },
   });

   const handleChangeFormData = async (e, key, type) => {
      switch (type) {
         case "province":
            const value = e.target.value;

            if (value) {
               const districtId = provinceDatas?.data.results.find((item) => item.province_name === value).province_id;
               setIsDisabled(true);
               const districtDatas = await provinceServices.getDistrictService(districtId);
               setDistrictDatas(districtDatas?.data.results);
            } else {
               setDistrictDatas([]);
            }

            clearErrors("district");
            setValue("province", value.trim(), { shouldValidate: Object.keys(errors).length ? true : false });
            setValue("district", "");
            setIsDisabled(false);
            break;
         case "district":
            setValue("district", e.target.value.trim(), { shouldValidate: Object.keys(errors).length ? true : false });
            clearErrors("district");
            break;
         default:
            setValue(key, e.target.value.trimStart());
            clearErrors(key);
            break;
      }
   };

   const handleBlurInput = (key) => {
      Object.keys(errors).length && trigger(key);
   };

   return (
      <form className={cx(`wrapper`, `mt-2`)} onSubmit={handleSubmit(onSubmit)}>
         <div className={`mb-2 flex justify-end w-full`}>
            <span className={`text-thirtieth-color mr-2`}>*</span>
            <span className={`text-twentieth-color`}>là thông tin bắt buộc</span>
         </div>
         <div className={`flex gap-4 flex-wrap`}>
            <div className={cx(`field`, `flex-1`)}>
               <Input
                  value={getValues("fullName")}
                  register={{ ...register("fullName") }}
                  labelCl={`block`}
                  field={`Người nhận hàng`}
                  fieldCl={`mb-1`}
                  inputCl={`border border-solid border-transparent outline outline-[1px] outline-black focus:border-black
                  p-2 w-full bg-white`}
                  inputRightIcon={<span className={`text-thirtieth-color`}>*</span>}
                  onChange={(e) => handleChangeFormData(e, "fullName")}
                  onBlur={() => handleBlurInput("fullName")}
               />
               {errors.fullName && <span className={`text-forty-second-color mt-1 block`}>{errors.fullName?.message}</span>}
            </div>
            <div className={cx(`field`, `flex-1`)}>
               <Input
                  value={getValues("phoneNumber")}
                  type="number"
                  register={{ ...register("phoneNumber") }}
                  labelCl={`block`}
                  field={`Điện thoại`}
                  fieldCl={`mb-1`}
                  inputCl={`border border-solid border-transparent outline outline-[1px] outline-black focus:border-black
                  p-2 w-full bg-white`}
                  inputRightIcon={<span className={`text-thirtieth-color`}>*</span>}
                  onChange={(e) => handleChangeFormData(e, "phoneNumber")}
                  onBlur={() => handleBlurInput("phoneNumber")}
               />
               {errors.phoneNumber && <span className={`text-forty-second-color mt-1 block`}>{errors.phoneNumber?.message}</span>}
            </div>
         </div>
         <div className={`mt-4`}>
            <span className={`block mb-1`}>Địa chỉ giao hàng</span>
            <div className={`flex gap-4 flex-wrap`}>
               <div className={cx(`field`, `flex-1`)}>
                  <Input
                     value={getValues("address")}
                     register={{ ...register("address") }}
                     labelCl={`block`}
                     fieldCl={`mb-1`}
                     inputCl={`border border-solid border-transparent outline outline-[1px] outline-black focus:border-black
                     p-2 w-full bg-white`}
                     inputRightIcon={<span className={`text-thirtieth-color`}>*</span>}
                     onChange={(e) => handleChangeFormData(e, "address")}
                     onBlur={() => handleBlurInput("address")}
                  />
                  {errors.address && <span className={`text-forty-second-color mt-1 block`}>{errors.address?.message}</span>}
               </div>
               <div className={cx(`field`, `flex-1`)}>
                  <Select
                     disabled={isDisabled}
                     value={getValues("province")}
                     register={{ ...register("province") }}
                     placeholder={`-- Chọn tỉnh thành`}
                     data={provinceDatas?.data.results}
                     valueKey={"province_name"}
                     contentKey={"province_name"}
                     selectWrapperCl={`w-full flex`}
                     selectCl={`border border-solid border-black p-[10.5px] w-full`}
                     rightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onChange={(e) => handleChangeFormData(e, "province", "province")}
                  />
                  {errors.province && <span className={`text-forty-second-color mt-1 block`}>{errors.province?.message}</span>}
               </div>
               <div className={`flex-1`}>
                  <Select
                     disabled={isDisabled}
                     value={getValues("district")}
                     register={{ ...register("district") }}
                     placeholder={`-- Chọn quận huyện`}
                     data={districtDatas}
                     valueKey={"district_name"}
                     contentKey={"district_name"}
                     selectWrapperCl={`w-full flex`}
                     selectCl={`border border-solid border-black p-[10.5px] w-full`}
                     rightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onChange={(e) => handleChangeFormData(e, "district", "district")}
                  />
                  {errors.district && <span className={`text-forty-second-color mt-1 block`}>{errors.district?.message}</span>}
               </div>
            </div>
            <div className={`mt-4 flex`}>
               <span className={`text-fifty-sixth-color mr-1`}>Thời gian giao hàng:</span>
               <span>Trong vòng 12 - 24 giờ làm việc.</span>
            </div>
         </div>
         <div className={`mt-4`}>
            <Input
               textarea
               value={getValues("note")}
               register={{ ...register("note") }}
               textareaHeight="80px"
               labelCl={`block`}
               field={`Ghi chú đơn hàng`}
               fieldCl={`mb-1`}
               inputCl={`border border-solid border-transparent outline outline-[1px] outline-black focus:border-black
               p-2 w-full max-h-[376px] bg-white`}
               onChange={(e) => handleChangeFormData(e, "note")}
            />
         </div>
         <button ref={ref} className="hidden"></button>
      </form>
   );
});

DeliveryTermsForm.propTypes = {
   onSubmit: PropTypes.func,
};

export default DeliveryTermsForm;
