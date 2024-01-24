import classNames from "classnames/bind";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import { schema } from "../../../../reactHookFormSchema";

import styles from "./UserDetailsForm.module.scss";

const cx = classNames.bind(styles);

function UserDetailsForm({ onClickCancelBtn }) {
   const [districtsData, setDistrictsData] = useState([]);

   const { data: provincesData, error } = useQuery({
      queryKey: ["provinces"],
      queryFn: () => axios.get(import.meta.env.VITE_PROVINCE_API),
   });

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      clearErrors,
      setValue,
      getValues,
   } = useForm({
      resolver: yupResolver(schema.userDetailsFormSchema),
   });

   const handleChangeFormData = (e, key, type) => {
      switch (type) {
         case "province":
            e.target.value
               ? setDistrictsData(provincesData?.data.find((item) => item.name === e.target.value).districts)
               : setDistrictsData([]);
            setValue("province", e.target.value.trim());
            clearErrors("province");
            setValue("district", "");
            break;
         case "district":
            setValue("district", e.target.value.trim());
            clearErrors("district");
            break;
         default:
            setValue(key, e.target.value.trimStart());
            clearErrors(key);
            break;
      }
   };

   const onSubmitHandle = (data) => {
      console.log(data);
      const arrErrors = Object.keys(errors);
      !arrErrors.length && reset();
   };

   const onSubmitErrorHandle = () => {
      !getValues("province") && clearErrors("district");
   };

   const handleBlurInput = (e, key) => {
      const value = e.target.value.trim();
      const arrErrors = Object.keys(errors);
      arrErrors.length && setValue(key, value, { shouldValidate: true });
   };

   return (
      <form className={cx("wrapper", "flex flex-col")} onSubmit={handleSubmit(onSubmitHandle, onSubmitErrorHandle)}>
         <div className="flex flex-col gap-4 w-full">
            <div>
               <Input
                  value={getValues("fullName") || ""}
                  register={{ ...register("fullName") }}
                  field={`Họ tên`}
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px] bg-white`}
                  onBlur={(e) => handleBlurInput(e, "fullName")}
                  onChange={(e) => handleChangeFormData(e, "fullName")}
               />
               {errors.fullName?.message && <p className={`text-thirtieth-color font-[700] mt-1`}>{errors.fullName.message}</p>}
            </div>
            <div>
               <Input
                  value={getValues("phoneNumber") || ""}
                  type="number"
                  register={{ ...register("phoneNumber") }}
                  field={`Điện thoại`}
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px] bg-white`}
                  onBlur={(e) => handleBlurInput(e, "phoneNumber")}
                  onChange={(e) => handleChangeFormData(e, "phoneNumber")}
               />
               {errors.phoneNumber?.message && (
                  <p className={`text-thirtieth-color font-[700] mt-1`}>{errors.phoneNumber.message}</p>
               )}
            </div>
            <div>
               <Input
                  value={getValues("email") || ""}
                  type="email"
                  register={{ ...register("email") }}
                  field={`Email`}
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px] bg-white`}
                  onBlur={(e) => handleBlurInput(e, "email")}
                  onChange={(e) => handleChangeFormData(e, "email")}
                  onInvalid={(e) => e.preventDefault()}
               />
               {errors.email?.message && <p className={`text-thirtieth-color font-[700] mt-1`}>{errors.email.message}</p>}
            </div>
            <div>
               <Input
                  value={getValues("address") || ""}
                  register={{ ...register("address") }}
                  field={`Địa chỉ`}
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px] bg-white`}
                  onBlur={(e) => handleBlurInput(e, "address")}
                  onChange={(e) => handleChangeFormData(e, "address")}
               />
               {errors.address?.message && <p className={`text-thirtieth-color font-[700] mt-1`}>{errors.address.message}</p>}
            </div>
            {error ? (
               <div className="text-thirtieth-color font-[700] mt-1">Không lấy được dữ liệu tỉnh thành</div>
            ) : (
               <>
                  <div>
                     <Select
                        value={getValues("province") || ""}
                        placeholder={`-- Chọn tỉnh thành`}
                        register={{ ...register("province") }}
                        data={provincesData?.data}
                        valueKey={"name"}
                        contentKey={"name"}
                        field={`Tỉnh/thành`}
                        labelCl={`block`}
                        selectCl={`border border-solid border-black p-2 w-full`}
                        onChange={(e) => handleChangeFormData(e, "province", "province")}
                     />
                     {errors.province?.message && (
                        <p className={`text-thirtieth-color font-[700] mt-1`}>{errors.province.message}</p>
                     )}
                  </div>
                  <div>
                     <Select
                        value={getValues("district") || ""}
                        placeholder={`-- Chọn quận huyện`}
                        register={{ ...register("district") }}
                        data={districtsData}
                        valueKey={"name"}
                        contentKey={"name"}
                        field={`Quận/huyện`}
                        labelCl={`block`}
                        selectCl={`border border-solid border-black p-2 w-full`}
                        onChange={(e) => handleChangeFormData(e, "district", "district")}
                     />
                     {errors.district?.message && (
                        <p className={`text-thirtieth-color font-[700] mt-1`}>{errors.district.message}</p>
                     )}
                  </div>
               </>
            )}
         </div>
         <div className={`my-4 flex flex-wrap gap-4 justify-center`}>
            <Button primary leftIcon={<i className="bi bi-arrow-counterclockwise text-denary-color"></i>}>
               Cập nhật
            </Button>
            <Button
               primary
               leftIcon={<i className="bi bi-x-lg text-denary-color"></i>}
               onClick={(e) => {
                  e.preventDefault();
                  onClickCancelBtn(false);
               }}
            >
               Hủy
            </Button>
         </div>
      </form>
   );
}

UserDetailsForm.propTypes = {
   onClickCancelBtn: PropTypes.func,
};

export default UserDetailsForm;
