import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import { schema } from "../../../../reactHookFormSchema";
import * as services from "../../../../services";

import styles from "./UserDetailsForm.module.scss";

const cx = classNames.bind(styles);

function UserDetailsForm({ onClickCancelBtn }) {
   const [districtsData, setDistrictsData] = useState([]);

   const { data: provincesData, error } = useQuery({
      queryKey: ["provinces"],
      queryFn: () => services.getProvinceService(),
   });

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      clearErrors,
      setValue,
      getValues,
      trigger,
   } = useForm({
      resolver: yupResolver(schema.userDetailsFormSchema),
   });

   const handleChangeFormData = (e, key, type) => {
      switch (type) {
         case "province":
            if (e.target.value) {
               const district = provincesData?.data.find((item) => item.name === e.target.value).districts;
               district ? setDistrictsData(district) : setDistrictsData([]);
            } else {
               setDistrictsData([]);
            }

            clearErrors("district");
            setValue("province", e.target.value.trim(), { shouldValidate: Object.keys(errors).length ? true : false });
            setValue("district", "");
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

   const onSubmitHandle = (data) => {
      console.log(data);
      const arrErrors = Object.keys(errors);
      !arrErrors.length && reset();
   };

   const onSubmitErrorHandle = () => {
      !getValues("province") && clearErrors("district");
   };

   const handleBlurInput = (key) => {
      Object.keys(errors).length && trigger(key);
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
                  onBlur={() => handleBlurInput("fullName")}
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
                  onBlur={() => handleBlurInput("phoneNumber")}
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
                  onBlur={() => handleBlurInput("email")}
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
                  onBlur={() => handleBlurInput("address")}
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
