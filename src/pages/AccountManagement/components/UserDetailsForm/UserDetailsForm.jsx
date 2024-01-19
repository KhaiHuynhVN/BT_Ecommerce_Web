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
            setValue("Tỉnh/thành", e.target.value.trim());
            clearErrors("Tỉnh/thành");
            setValue("Quận/huyện", "");
            break;
         case "district":
            setValue("Quận/huyện", e.target.value.trim());
            clearErrors("Quận/huyện");
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
      !getValues("Tỉnh/thành") && clearErrors("Quận/huyện");
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
                  value={getValues("Họ tên") || ""}
                  register={{ ...register("Họ tên") }}
                  type="text"
                  field={`Họ tên`}
                  labelCl={`block`}
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px] bg-white`}
                  onBlur={(e) => handleBlurInput(e, "Họ tên")}
                  onChange={(e) => handleChangeFormData(e, "Họ tên")}
               />
               {errors["Họ tên"]?.message && <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Họ tên"].message}</p>}
            </div>
            <div>
               <Input
                  value={getValues("Điện thoại") || ""}
                  register={{ ...register("Điện thoại") }}
                  type="number"
                  field={`Điện thoại`}
                  labelCl={`block`}
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px] bg-white`}
                  onBlur={(e) => handleBlurInput(e, "Điện thoại")}
                  onChange={(e) => handleChangeFormData(e, "Điện thoại")}
               />
               {errors["Điện thoại"]?.message && (
                  <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Điện thoại"].message}</p>
               )}
            </div>
            <div>
               <Input
                  value={getValues("Email") || ""}
                  register={{ ...register("Email") }}
                  type="text"
                  field={`Email`}
                  labelCl={`block`}
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px] bg-white`}
                  onBlur={(e) => handleBlurInput(e, "Email")}
                  onChange={(e) => handleChangeFormData(e, "Email")}
               />
               {errors["Email"]?.message && <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Email"].message}</p>}
            </div>
            <div>
               <Input
                  value={getValues("Địa chỉ") || ""}
                  register={{ ...register("Địa chỉ") }}
                  type="text"
                  field={`Địa chỉ`}
                  labelCl={`block`}
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px] bg-white`}
                  onBlur={(e) => handleBlurInput(e, "Địa chỉ")}
                  onChange={(e) => handleChangeFormData(e, "Địa chỉ")}
               />
               {errors["Địa chỉ"]?.message && (
                  <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Địa chỉ"].message}</p>
               )}
            </div>
            {error ? (
               <div className="text-thirtieth-color font-[700] mt-1">Không lấy được dữ liệu tỉnh thành</div>
            ) : (
               <>
                  <div>
                     <Select
                        value={getValues("Tỉnh/thành") || ""}
                        placeholder={`-- Chọn tỉnh thành`}
                        field={`Tỉnh/thành`}
                        labelCl={`block`}
                        selectCl={`border border-solid border-black p-2 w-full`}
                        register={{ ...register("Tỉnh/thành") }}
                        data={provincesData?.data}
                        valueKey={"name"}
                        contentKey={"name"}
                        onChange={(e) => handleChangeFormData(e, "Tỉnh/thành", "province")}
                     />
                     {errors["Tỉnh/thành"]?.message && (
                        <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Tỉnh/thành"].message}</p>
                     )}
                  </div>
                  <div>
                     <Select
                        value={getValues("Quận/huyện") || ""}
                        placeholder={`-- Chọn quận huyện`}
                        field={`Quận/huyện`}
                        labelCl={`block`}
                        selectCl={`border border-solid border-black p-2 w-full`}
                        register={{ ...register("Quận/huyện") }}
                        data={districtsData}
                        valueKey={"name"}
                        contentKey={"name"}
                        onChange={(e) => handleChangeFormData(e, "Quận/huyện", "district")}
                     />
                     {errors["Quận/huyện"]?.message && (
                        <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Quận/huyện"].message}</p>
                     )}
                  </div>
               </>
            )}
         </div>
         <div className={`my-4 flex gap-4 justify-center`}>
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
