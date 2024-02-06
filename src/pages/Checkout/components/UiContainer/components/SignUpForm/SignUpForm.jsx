/* eslint-disable no-case-declarations */
/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "react-query";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../../../../../../components/Button";
import Input from "../../../../../../components/Input";
import Select from "../../../../../../components/Select";
import { schema } from "../../../../../../reactHookFormSchema";
import routesConfig from "../../../../../../routesConfig";
import { provinceServices, userServices } from "../../../../../../services";

import styles from "./SignUpForm.module.scss";

const cx = classNames.bind(styles);

function SignUpForm({ isReset }) {
   const navigate = useNavigate();
   const [districtDatas, setDistrictDatas] = useState([]);
   const [isDisabled, setIsDisabled] = useState(false);
   const [reCaptcha, setReCaptcha] = useState(false);

   const recaptchaRef = useRef();

   const { data: provinceDatas, error } = useQuery({
      queryKey: ["provinces"],
      queryFn: () => axios.get(import.meta.env.VITE_PROVINCE_API),
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
      reset,
      trigger,
   } = useForm({
      resolver: yupResolver(schema.signUpFormSchema),
   });

   useEffect(() => {
      reset();
      if (!isReset) return;
      reCaptcha && recaptchaRef.current.reset();
      setReCaptcha(false);
   }, [isReset]);

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
      setReCaptcha(value ? true : false);
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

      const arrErrors = Object.keys(errors);
      if (!arrErrors.length) {
         console.log(newData);
         mutate(newData);
      }
   };

   const onSubmitErrorHandle = () => {
      !getValues("province") && clearErrors("district");
   };

   const handleBlurInput = (key) => {
      Object.keys(errors).length && trigger(key);
      key === "password" && Object.keys(errors).length && trigger("confirmPassword");
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
                  value={getValues("fullName") || ""}
                  placeholder="Họ tên"
                  register={{ ...register("fullName") }}
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={() => handleBlurInput("fullName")}
                  onChange={(e) => handleChangeFormData(e, "fullName")}
               />
               {errors.fullName?.message && <p className={`text-tertiary-color mt-1`}>{errors.fullName.message}</p>}
            </div>
            <div>
               <Input
                  value={getValues("phoneNumber") || ""}
                  type="number"
                  placeholder="Điện thoại"
                  register={{ ...register("phoneNumber") }}
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={() => handleBlurInput("phoneNumber")}
                  onChange={(e) => handleChangeFormData(e, "phoneNumber")}
               />
               {errors.phoneNumber?.message && <p className={`text-tertiary-color mt-1`}>{errors.phoneNumber.message}</p>}
            </div>
            <div>
               <Input
                  value={getValues("email") || ""}
                  type="email"
                  placeholder="Email"
                  register={{ ...register("email") }}
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={() => handleBlurInput("email")}
                  onChange={(e) => handleChangeFormData(e, "email")}
                  onInvalid={(e) => e.preventDefault()}
               />
               {errors.email?.message && <p className={`text-tertiary-color mt-1`}>{errors.email.message}</p>}
            </div>
            <div>
               <Input
                  value={getValues("password") || ""}
                  type="password"
                  placeholder="Mật khẩu"
                  register={{ ...register("password") }}
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={() => handleBlurInput("password")}
                  onChange={(e) => handleChangeFormData(e, "password", null, true)}
               />
               {errors.password?.message && <p className={`text-tertiary-color mt-1`}>{errors.password.message}</p>}
            </div>
            <div>
               <Input
                  value={getValues("confirmPassword") || ""}
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                  register={{ ...register("confirmPassword") }}
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={() => handleBlurInput("confirmPassword")}
                  onChange={(e) => handleChangeFormData(e, "confirmPassword", null, true)}
               />
               {errors.confirmPassword?.message && <p className={`text-tertiary-color mt-1`}>{errors.confirmPassword.message}</p>}
            </div>
            <div>
               <Input
                  value={getValues("address") || ""}
                  placeholder="Địa chỉ (số nhà, tên đường, phường/xã)"
                  register={{ ...register("address") }}
                  inputWrapperCl={`w-full`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={() => handleBlurInput("address")}
                  onChange={(e) => handleChangeFormData(e, "address")}
               />
               {errors.address?.message && <p className={`text-tertiary-color mt-1`}>{errors.address.message}</p>}
            </div>
            {error ? (
               <div className="text-tertiary-color mt-1">Không lấy được dữ liệu tỉnh thành</div>
            ) : (
               <>
                  <div>
                     <Select
                        value={getValues("province") || ""}
                        placeholder="-- Chọn tỉnh thành"
                        register={{ ...register("province") }}
                        data={provinceDatas?.data.results}
                        valueKey={"province_name"}
                        contentKey={"province_name"}
                        selectWrapperCl={`w-full flex`}
                        selectCl={`border border-solid border-black p-2 w-full`}
                        rightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                        onChange={(e) => handleChangeFormData(e, "province", "province")}
                     />
                     {errors.province?.message && <p className={`text-tertiary-color mt-1`}>{errors.province.message}</p>}
                  </div>
                  <div>
                     <Select
                        disabled={isDisabled}
                        value={getValues("district") || ""}
                        placeholder="-- Chọn quận huyện"
                        register={{ ...register("district") }}
                        data={districtDatas}
                        valueKey={"district_name"}
                        contentKey={"district_name"}
                        selectWrapperCl={`w-full flex`}
                        selectCl={`border border-solid border-black p-2 w-full`}
                        rightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                        onChange={(e) => handleChangeFormData(e, "district", "district")}
                     />
                     {errors.district?.message && <p className={`text-tertiary-color mt-1`}>{errors.district.message}</p>}
                  </div>
               </>
            )}
         </div>
         <div className="mt-4">
            <div>
               <ReCAPTCHA ref={recaptchaRef} sitekey={import.meta.env.VITE_RECAPTCHA_KEY} onChange={handleReCaptcha} />
               {errors.recaptcha?.message && <p className={`text-tertiary-color mt-1`}>{errors.recaptcha.message}</p>}
            </div>
            <div>
               <Input
                  checked={getValues("accepTerm") !== undefined ? getValues("accepTerm") : true}
                  type="checkbox"
                  disabled
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
