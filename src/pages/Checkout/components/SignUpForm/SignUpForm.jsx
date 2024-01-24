/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";
import PropTypes from "prop-types";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import { schema } from "../../../../reactHookFormSchema";

import styles from "./SignUpForm.module.scss";

const cx = classNames.bind(styles);

function SignUpForm({ isReset }) {
   const [districtsData, setDistrictsData] = useState([]);
   const [reCaptcha, setReCaptcha] = useState(false);

   const recaptchaRef = useRef();

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
      setError,
      setValue,
      getValues,
   } = useForm({
      resolver: yupResolver(schema.signUpFormSchema),
   });

   useEffect(() => {
      reset();
      if (!isReset) return;
      reCaptcha && recaptchaRef.current.reset();
      setReCaptcha(false);
   }, [isReset]);

   const handleChangeFormData = (e, key, type, isPassword) => {
      switch (type) {
         case "checkbox":
            setValue(key, e.target.checked);
            clearErrors(key);
            break;
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
            setValue(key, isPassword ? e.target.value : e.target.value.trimStart());
            clearErrors(key);
            break;
      }
      !getValues("accepTerm") && type !== "checkbox" && setValue("accepTerm", true);
   };

   const handleReCaptcha = (value) => {
      setValue("recaptcha", value ? true : false, { shouldValidate: value ? true : false });
   };

   const onSubmitHandle = (data) => {
      console.log(data);
      const arrErrors = Object.keys(errors);
      !arrErrors.length && reset();
   };

   const onSubmitErrorHandle = () => {
      !getValues("Mật khẩu") && clearErrors("Xác nhận mật khẩu");
      if (getValues("Mật khẩu").length >= 6) {
         if (!getValues("Xác nhận mật khẩu")) {
            setError("Xác nhận mật khẩu", { message: "Vui lòng xác nhận mật khẩu!", type: "required" });
         } else if (getValues("Mật khẩu") !== getValues("Xác nhận mật khẩu")) {
            setError("Xác nhận mật khẩu", { message: "Mật khẩu không khớp!", type: "required" });
         }
      } else {
         clearErrors("Xác nhận mật khẩu");
      }
      !getValues("Tỉnh/thành") && clearErrors("Quận/huyện");
   };

   const handleBlurInput = (e, key) => {
      const value = e.target.value;
      const arrErrors = Object.keys(errors);
      arrErrors.length && setValue(key, value, { shouldValidate: true });
   };

   return (
      <form className={cx("wrapper", "flex flex-col")} onSubmit={handleSubmit(onSubmitHandle, onSubmitErrorHandle)}>
         <div className={`mb-2 flex justify-end w-full`}>
            <span className={`text-thirtieth-color mr-2`}>*</span>
            <span className={`text-senary-color`}>là thông tin bắt buộc</span>
         </div>
         <div className="flex flex-col gap-4 w-full">
            <div>
               <Input
                  value={getValues("Họ tên") || ""}
                  register={{ ...register("Họ tên") }}
                  type="text"
                  placeholder="Họ tên"
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
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
                  placeholder="Điện thoại"
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
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
                  placeholder="Email"
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={(e) => handleBlurInput(e, "Email")}
                  onChange={(e) => handleChangeFormData(e, "Email")}
               />
               {errors["Email"]?.message && <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Email"].message}</p>}
            </div>
            <div>
               <Input
                  value={getValues("Mật khẩu") || ""}
                  register={{ ...register("Mật khẩu") }}
                  type="password"
                  placeholder="Mật khẩu"
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={(e) => handleBlurInput(e, "Mật khẩu")}
                  onChange={(e) => handleChangeFormData(e, "Mật khẩu", null, true)}
               />
               {errors["Mật khẩu"]?.message && (
                  <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Mật khẩu"].message}</p>
               )}
            </div>
            <div>
               <Input
                  value={getValues("Xác nhận mật khẩu") || ""}
                  register={{ ...register("Xác nhận mật khẩu") }}
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={(e) => handleBlurInput(e, "Xác nhận mật khẩu")}
                  onChange={(e) => handleChangeFormData(e, "Xác nhận mật khẩu", null, true)}
               />
               {errors["Xác nhận mật khẩu"]?.message && (
                  <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Xác nhận mật khẩu"].message}</p>
               )}
            </div>
            <div>
               <Input
                  value={getValues("Địa chỉ") || ""}
                  register={{ ...register("Địa chỉ") }}
                  type="text"
                  placeholder="Địa chỉ (số nhà, tên đường, phường/xã)"
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
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
                        selectWrapperCl={`w-full flex`}
                        selectCl={`border border-solid border-black p-2 w-full`}
                        placeholder="-- Chọn tỉnh thành"
                        register={{ ...register("Tỉnh/thành") }}
                        data={provincesData?.data}
                        valueKey={"name"}
                        contentKey={"name"}
                        rightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                        onChange={(e) => handleChangeFormData(e, "Tỉnh/thành", "province")}
                     />
                     {errors["Tỉnh/thành"]?.message && (
                        <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Tỉnh/thành"].message}</p>
                     )}
                  </div>
                  <div>
                     <Select
                        value={getValues("Quận/huyện") || ""}
                        selectWrapperCl={`w-full flex`}
                        selectCl={`border border-solid border-black p-2 w-full`}
                        placeholder="-- Chọn quận huyện"
                        register={{
                           ...register("Quận/huyện"),
                        }}
                        data={districtsData}
                        valueKey={"name"}
                        contentKey={"name"}
                        rightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                        onChange={(e) => handleChangeFormData(e, "Quận/huyện", "district")}
                     />
                     {errors["Quận/huyện"]?.message && (
                        <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Quận/huyện"].message}</p>
                     )}
                  </div>
               </>
            )}
         </div>
         <div className="mt-4">
            <div>
               <ReCAPTCHA ref={recaptchaRef} sitekey={import.meta.env.VITE_RECAPTCHA_KEY} onChange={handleReCaptcha} />
               {errors["recaptcha"]?.message && (
                  <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["recaptcha"].message}</p>
               )}
            </div>
            <div>
               <Input
                  checked={getValues("accepTerm") !== undefined ? getValues("accepTerm") : true}
                  register={{ ...register("accepTerm") }}
                  disabled
                  wrapperCl={`mt-4`}
                  inputWrapperCl={`items-center`}
                  inputCl={`size-4`}
                  type="checkbox"
                  content={`Tôi đồng ý với các điều khoản và quy định sử dụng tại thegioidien.com`}
                  onChange={(e) => handleChangeFormData(e, "accepTerm", "checkbox")}
               />
               {errors["accepTerm"]?.message && (
                  <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["accepTerm"].message}</p>
               )}
            </div>
            <Input
               checked={getValues("accepPromotion") !== undefined ? getValues("accepPromotion") : true}
               register={{ ...register("accepPromotion") }}
               wrapperCl={`mt-4`}
               inputWrapperCl={`items-center`}
               inputCl={`size-4`}
               type="checkbox"
               content={`Nhận thông tin khuyến mãi qua email`}
               onChange={(e) => handleChangeFormData(e, "accepPromotion", "checkbox")}
            />
            <Button primary className={`mt-4 mx-auto`} leftIcon={<i className="bi bi-chevron-right text-secondary-color"></i>}>
               Tiếp tục
            </Button>
         </div>
      </form>
   );
}

SignUpForm.propTypes = {
   isReset: PropTypes.bool,
};

export default SignUpForm;
