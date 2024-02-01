/* eslint-disable no-case-declarations */
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames/bind";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import { schema } from "../../../../reactHookFormSchema";
import routesConfig from "../../../../routesConfig";
import { provinceServices, userServices } from "../../../../services";

import styles from "./SignUpForm.module.scss";

const cx = classNames.bind(styles);

function SignUpForm() {
   const navigate = useNavigate();
   const [districtDatas, setDistrictDatas] = useState([]);
   const [isDisabled, setIsDisabled] = useState(false);

   const { data: provinceDatas, error } = useQuery({
      queryKey: ["provinces"],
      queryFn: () => provinceServices.getProvinceService(),
      onSuccess: () => {},
      onError: (err) => console.log(err),
   });

   const { mutate } = useMutation({
      mutationFn: (data) => userServices.signUpService(data),
      onSuccess: () => {
         navigate(routesConfig.signIn.path);
      },
      onError: (error) => {
         console.log("error: ", error);
      },
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
      resolver: yupResolver(schema.signUpFormSchema),
   });

   const handleChangeFormData = async (e, key, type, isPassword) => {
      switch (type) {
         case "checkbox":
            setValue(key, e.target.checked);
            clearErrors(key);
            break;
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
            setValue(key, isPassword ? e.target.value : e.target.value.trimStart());
            clearErrors(key);
            break;
      }
   };

   const handleReCaptcha = (value) => {
      setValue("recaptcha", !!value, { shouldValidate: !!value });
   };

   const onSubmitHandle = (data) => {
      const { email, password, phoneNumber: phone, fullName: name, address, district, province } = data;

      const newData = {
         email,
         password,
         phone: `+84${phone.replace(/^0+/, "")}`,
         name,
         address: `${address}, ${district}, ${province}`,
      };

      if (!Object.keys(errors).length) {
         console.log(newData);
         mutate(newData);
      }
   };

   const handleBlurInput = (key) => {
      Object.keys(errors).length && trigger(key);
      key === "password" && Object.keys(errors).length && trigger("confirmPassword");
   };

   return (
      <form className={cx("wrapper", "flex flex-col items-center mt-[1rem]")} onSubmit={handleSubmit(onSubmitHandle)}>
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
                     onBlur={() => handleBlurInput("fullName")}
                     onChange={(e) => handleChangeFormData(e, "fullName")}
                  />
                  {errors.fullName?.message && (
                     <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
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
                     onBlur={() => handleBlurInput("phoneNumber")}
                     onChange={(e) => handleChangeFormData(e, "phoneNumber")}
                  />
                  {errors.phoneNumber?.message && (
                     <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
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
                     onBlur={() => handleBlurInput("email")}
                     onChange={(e) => handleChangeFormData(e, "email")}
                     onInvalid={(e) => e.preventDefault()}
                  />
                  {errors.email?.message && (
                     <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
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
                     onBlur={() => handleBlurInput("password")}
                     onChange={(e) => handleChangeFormData(e, "password", null, true)}
                  />
                  {errors.password?.message && (
                     <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
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
                     onBlur={() => handleBlurInput("confirmPassword")}
                     onChange={(e) => handleChangeFormData(e, "confirmPassword", null, true)}
                  />
                  {errors.confirmPassword?.message && (
                     <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
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
                     onBlur={() => handleBlurInput("address")}
                     onChange={(e) => handleChangeFormData(e, "address")}
                  />
                  {errors.address?.message && (
                     <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors.address.message}
                     </p>
                  )}
               </div>
               {error ? (
                  <div className="text-tertiary-color">Không lấy được dữ liệu tỉnh thành</div>
               ) : (
                  <>
                     <div className={cx("field-item", "flex items-center relative")}>
                        <Select
                           value={getValues("province")}
                           placeholder="-- Chọn tỉnh thành"
                           register={{ ...register("province") }}
                           data={provinceDatas?.data.results}
                           valueKey={"province_name"}
                           contentKey={"province_name"}
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
                           <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
                              {errors.province.message}
                           </p>
                        )}
                     </div>
                     <div className={cx("field-item", "flex items-center relative")}>
                        <Select
                           disabled={isDisabled}
                           value={getValues("district")}
                           placeholder="-- Chọn quận huyện"
                           register={{ ...register("district") }}
                           data={districtDatas}
                           valueKey={"district_name"}
                           contentKey={"district_name"}
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
                           <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
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
                  {errors.recaptcha?.message && <p className={`text-tertiary-color mt-1`}>{errors.recaptcha.message}</p>}
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
                  {errors["accepTerm"]?.message && <p className={`text-tertiary-color mt-1`}>{errors["accepTerm"].message}</p>}
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
