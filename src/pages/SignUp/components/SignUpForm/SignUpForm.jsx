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
      <form
         className={cx("wrapper", "flex flex-col items-center mt-[1rem]")}
         onSubmit={handleSubmit(onSubmitHandle, onSubmitErrorHandle)}
      >
         <div className={cx("form-container-wrapper", "flex flex-col")}>
            <div className={cx("form-container", "flex flex-col gap-4 items-start")}>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("Họ tên")}
                     field="Họ tên"
                     register={{ ...register("Họ tên") }}
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "Họ tên")}
                     onChange={(e) => handleChangeFormData(e, "Họ tên")}
                  />
                  {errors["Họ tên"]?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors["Họ tên"].message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("Điện thoại") || ""}
                     field="Điện thoại"
                     register={{ ...register("Điện thoại") }}
                     type="number"
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "Điện thoại")}
                     onChange={(e) => handleChangeFormData(e, "Điện thoại")}
                  />
                  {errors["Điện thoại"]?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors["Điện thoại"].message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("Email")}
                     field="Email"
                     register={{ ...register("Email") }}
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "Email")}
                     onChange={(e) => handleChangeFormData(e, "Email")}
                  />
                  {errors["Email"]?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors["Email"].message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("Mật khẩu")}
                     field="Mật khẩu"
                     register={{ ...register("Mật khẩu") }}
                     type="password"
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "Mật khẩu")}
                     onChange={(e) => handleChangeFormData(e, "Mật khẩu", null, true)}
                  />
                  {errors["Mật khẩu"]?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors["Mật khẩu"].message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("Xác nhận mật khẩu")}
                     field="Xác nhận mật khẩu"
                     register={{ ...register("Xác nhận mật khẩu") }}
                     type="password"
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "Xác nhận mật khẩu")}
                     onChange={(e) => handleChangeFormData(e, "Xác nhận mật khẩu", null, true)}
                  />
                  {errors["Xác nhận mật khẩu"]?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors["Xác nhận mật khẩu"].message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("Địa chỉ")}
                     field="Địa chỉ"
                     register={{ ...register("Địa chỉ") }}
                     placeholder="Số nhà, tên đường, phường/xã"
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "Địa chỉ")}
                     onChange={(e) => handleChangeFormData(e, "Địa chỉ")}
                  />
                  {errors["Địa chỉ"]?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors["Địa chỉ"].message}
                     </p>
                  )}
               </div>
               {error ? (
                  <div className="text-thirtieth-color font-[700]">Không lấy được dữ liệu tỉnh thành</div>
               ) : (
                  <>
                     <div className={cx("field-item", "flex items-center relative")}>
                        <Select
                           value={getValues("Tỉnh/thành")}
                           selectWrapperCl={`flex`}
                           labelCl={cx("select-label", `flex relative`)}
                           fieldCl={cx(
                              "select-field",
                              `absolute mr-2 top-[50%] translate-y-[-50%] right-[100%] text-nowrap text-[16px]`,
                           )}
                           selectCl={cx("select", `border border-solid border-black p-2 w-[500px]`)}
                           placeholder="-- Chọn tỉnh thành"
                           field={"Tỉnh/thành"}
                           register={{ ...register("Tỉnh/thành") }}
                           data={provincesData?.data}
                           valueKey={"name"}
                           contentKey={"name"}
                           rightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                           onChange={(e) => handleChangeFormData(e, "Tỉnh/thành", "province")}
                        />
                        {errors["Tỉnh/thành"]?.message && (
                           <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                              {errors["Tỉnh/thành"].message}
                           </p>
                        )}
                     </div>
                     <div className={cx("field-item", "flex items-center relative")}>
                        <Select
                           value={getValues("Quận/huyện")}
                           selectWrapperCl={`flex w-full`}
                           labelCl={cx("select-label", `flex relative`)}
                           fieldCl={cx(
                              "select-field",
                              `absolute mr-2 top-[50%] translate-y-[-50%] right-[100%] text-nowrap text-[16px]`,
                           )}
                           selectCl={cx("select", `border border-solid border-black p-2 w-[500px]`)}
                           placeholder="-- Chọn quận huyện"
                           field={"Quận/huyện"}
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
                           <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                              {errors["Quận/huyện"].message}
                           </p>
                        )}
                     </div>
                  </>
               )}
            </div>
            <div className={"my-4"}>
               <div>
                  <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_KEY} onChange={handleReCaptcha} />
                  {errors["recaptcha"]?.message && (
                     <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["recaptcha"].message}</p>
                  )}
               </div>
               <div>
                  <Input
                     checked={getValues("accepTerm") !== undefined ? getValues("accepTerm") : true}
                     register={{ ...register("accepTerm") }}
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
