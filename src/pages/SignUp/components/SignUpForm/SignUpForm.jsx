import classNames from "classnames/bind";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import { schema } from "../../../../reactHookFormSchema";

import styles from "./SignUpForm.module.scss";

const cx = classNames.bind(styles);

function SignUpForm() {
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
      setError,
      setValue,
      getValues,
   } = useForm({
      resolver: yupResolver(schema.signUpFormSchema),
   });

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
            setValue("province", e.target.value.trim());
            clearErrors("province");
            setValue("district", "");
            break;
         case "district":
            setValue("district", e.target.value.trim());
            clearErrors("district");
            break;
         default:
            setValue(key, isPassword ? e.target.value : e.target.value.trimStart());
            clearErrors(key);
            break;
      }
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
      !getValues("password") && clearErrors("confirmPassword");
      if (getValues("password").length >= 6) {
         if (!getValues("confirmPassword")) {
            setError("confirmPassword", { message: "Vui lòng xác nhận mật khẩu!", type: "required" });
         } else if (getValues("password") !== getValues("confirmPassword")) {
            setError("confirmPassword", { message: "Mật khẩu không khớp!", type: "required" });
         }
      } else {
         clearErrors("confirmPassword");
      }
      !getValues("province") && clearErrors("district");
   };

   const handleBlurInput = (e, key) => {
      const value = e.target.value;
      const arrErrors = Object.keys(errors);
      arrErrors.length && setValue(key, value, { shouldValidate: true });
   };

   return (
      <form
         className={cx("wrapper", "flex flex-col items-center mt-[1rem]")}
         onSubmit={handleSubmit(onSubmitHandle, onSubmitErrorHandle)}
      >
         <div className={cx("form-container-wrapper", "flex flex-col")}>
            <div className={cx("form-container", "flex flex-col gap-4 items-start")}>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("fullName")}
                     register={{ ...register("fullName") }}
                     field="Họ tên"
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "fullName")}
                     onChange={(e) => handleChangeFormData(e, "fullName")}
                  />
                  {errors.fullName?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors.fullName.message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("phoneNumber") || ""}
                     type="number"
                     register={{ ...register("phoneNumber") }}
                     field="Điện thoại"
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "phoneNumber")}
                     onChange={(e) => handleChangeFormData(e, "phoneNumber")}
                  />
                  {errors.phoneNumber?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors.phoneNumber.message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("email")}
                     type="email"
                     register={{ ...register("email") }}
                     field="Email"
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "email")}
                     onChange={(e) => handleChangeFormData(e, "email")}
                     onInvalid={(e) => e.preventDefault()}
                  />
                  {errors.email?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors.email.message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("password")}
                     type="password"
                     register={{ ...register("password") }}
                     field="Mật khẩu"
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "password")}
                     onChange={(e) => handleChangeFormData(e, "password", null, true)}
                  />
                  {errors.password?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors.password.message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("confirmPassword")}
                     type="password"
                     register={{ ...register("confirmPassword") }}
                     field="Xác nhận mật khẩu"
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "confirmPassword")}
                     onChange={(e) => handleChangeFormData(e, "confirmPassword", null, true)}
                  />
                  {errors.confirmPassword?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors.confirmPassword.message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("address")}
                     placeholder="Số nhà, tên đường, phường/xã"
                     register={{ ...register("address") }}
                     field="Địa chỉ"
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "address")}
                     onChange={(e) => handleChangeFormData(e, "address")}
                  />
                  {errors.address?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors.address.message}
                     </p>
                  )}
               </div>
               {error ? (
                  <div className="text-thirtieth-color font-[700]">Không lấy được dữ liệu tỉnh thành</div>
               ) : (
                  <>
                     <div className={cx("field-item", "flex items-center relative")}>
                        <Select
                           value={getValues("province")}
                           placeholder="-- Chọn tỉnh thành"
                           register={{ ...register("province") }}
                           data={provincesData?.data}
                           valueKey={"name"}
                           contentKey={"name"}
                           field={"Tỉnh/thành"}
                           selectWrapperCl={`flex`}
                           labelCl={cx("select-label", `flex relative`)}
                           fieldCl={cx(
                              "select-field",
                              `absolute mr-2 top-[50%] translate-y-[-50%] right-[100%] text-nowrap text-[16px]`,
                           )}
                           selectCl={cx("select", `border border-solid border-black p-2 w-[500px]`)}
                           rightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                           onChange={(e) => handleChangeFormData(e, "province", "province")}
                        />
                        {errors.province?.message && (
                           <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                              {errors.province.message}
                           </p>
                        )}
                     </div>
                     <div className={cx("field-item", "flex items-center relative")}>
                        <Select
                           value={getValues("district")}
                           placeholder="-- Chọn quận huyện"
                           register={{ ...register("district") }}
                           data={districtsData}
                           valueKey={"name"}
                           contentKey={"name"}
                           field={"Quận/huyện"}
                           labelCl={cx("select-label", `flex relative`)}
                           fieldCl={cx(
                              "select-field",
                              `absolute mr-2 top-[50%] translate-y-[-50%] right-[100%] text-nowrap text-[16px]`,
                           )}
                           selectWrapperCl={`flex w-full`}
                           selectCl={cx("select", `border border-solid border-black p-2 w-[500px]`)}
                           rightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                           onChange={(e) => handleChangeFormData(e, "district", "district")}
                        />
                        {errors.district?.message && (
                           <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                              {errors.district.message}
                           </p>
                        )}
                     </div>
                  </>
               )}
            </div>
            <div className={"my-4"}>
               <div>
                  <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_KEY} onChange={handleReCaptcha} />
                  {errors.recaptcha?.message && (
                     <p className={`text-thirtieth-color font-[700] mt-1`}>{errors.recaptcha.message}</p>
                  )}
               </div>
               <div>
                  <Input
                     checked={getValues("accepTerm") !== undefined ? getValues("accepTerm") : true}
                     type="checkbox"
                     register={{ ...register("accepTerm") }}
                     content={`Tôi đồng ý với các điều khoản và quy định sử dụng tại thegioidien.com`}
                     wrapperCl={`mt-4`}
                     inputWrapperCl={`items-center`}
                     inputCl={`size-4`}
                     onChange={(e) => handleChangeFormData(e, "accepTerm", "checkbox")}
                  />
                  {errors["accepTerm"]?.message && (
                     <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["accepTerm"].message}</p>
                  )}
               </div>
               <Input
                  checked={getValues("accepPromotion") !== undefined ? getValues("accepPromotion") : true}
                  type="checkbox"
                  register={{ ...register("accepPromotion") }}
                  content={`Nhận thông tin khuyến mãi qua email`}
                  wrapperCl={`mt-4`}
                  inputWrapperCl={`items-center`}
                  inputCl={`size-4`}
                  onChange={(e) => handleChangeFormData(e, "accepPromotion", "checkbox")}
               />
               <Button
                  primary
                  className={`mt-4 mx-auto`}
                  leftIcon={<i className="bi bi-file-earmark-person text-secondary-color"></i>}
               >
                  Đăng ký
               </Button>
            </div>
         </div>
      </form>
   );
}

export default SignUpForm;
