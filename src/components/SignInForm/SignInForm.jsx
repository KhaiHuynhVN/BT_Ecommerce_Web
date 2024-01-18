/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";

import Input from "../Input";
import Button from "../Button";
import { schema } from "../../reactHookFormSchema";
import routesConfig from "../../routesConfig";

import styles from "./SignInForm.module.scss";

const cx = classNames.bind(styles);

function SignInForm({ isReset }) {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      clearErrors,
      setValue,
      getValues,
   } = useForm({
      resolver: yupResolver(schema.signInFormSchema),
   });

   useEffect(() => {
      reset();
   }, [isReset]);

   const handleChangeFormData = (e, key) => {
      setValue(key, e.target.value);
      clearErrors(key);
   };

   const onSubmitHandle = (data) => {
      console.log(data);
      const arrErrors = Object.keys(errors);
      !arrErrors.length && reset();
   };

   const handleBlurInput = (e, key) => {
      const value = e.target.value.trim();
      const arrErrors = Object.keys(errors);
      !value && arrErrors.length && setValue(key, e.target.value, { shouldValidate: true });
   };

   return (
      <form className={cx("wrapper", "flex flex-col")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div className="flex flex-col gap-4 w-full">
            <div>
               <Input
                  value={getValues("Tài khoản") || ""}
                  register={{ ...register("Tài khoản") }}
                  placeholder="Tài khoản"
                  field="Tài khoản"
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={(e) => handleBlurInput(e, "Tài khoản")}
                  onChange={(e) => handleChangeFormData(e, "Tài khoản")}
               />
               {errors["Tài khoản"]?.message && (
                  <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Tài khoản"].message}</p>
               )}
            </div>
            <div>
               <Input
                  value={getValues("Mật khẩu") || ""}
                  register={{ ...register("Mật khẩu") }}
                  type="password"
                  placeholder="Mật khẩu"
                  field="Mật khẩu"
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={(e) => handleBlurInput(e, "Mật khẩu")}
                  onChange={(e) => handleChangeFormData(e, "Mật khẩu")}
               />
               {errors["Mật khẩu"]?.message && (
                  <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Mật khẩu"].message}</p>
               )}
            </div>
            <Button
               className={`max-w-fit hover:decoration-1`}
               text
               leftIcon={<i className="bi bi-key-fill text-tertiary-color flex items-center"></i>}
               to={routesConfig.forgotPassword.path}
            >
               Quên mật khẩu?
            </Button>
         </div>
         <div className="mt-4">
            <Button
               className={`mt-4 mx-auto`}
               primary
               leftIcon={<i className="bi bi-download text-secondary-color block rotate-[-90deg]"></i>}
            >
               Đăng nhập
            </Button>
         </div>
      </form>
   );
}

SignInForm.propTypes = {
   isReset: PropTypes.bool,
};

export default SignInForm;
