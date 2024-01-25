/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { schema } from "../../../../reactHookFormSchema";
import routesConfig from "../../../../routesConfig";

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
      trigger,
   } = useForm({
      resolver: yupResolver(schema.signInFormSchema),
   });

   useEffect(() => {
      reset();
   }, [isReset]);

   const handleChangeFormData = (e, key, isPassword) => {
      setValue(key, isPassword ? e.target.value : e.target.value.trimStart());
      clearErrors(key);
   };

   const onSubmitHandle = (data) => {
      console.log(data);
      const arrErrors = Object.keys(errors);
      !arrErrors.length && reset();
   };

   const handleBlurInput = (key) => {
      Object.keys(errors).length && trigger(key);
   };

   return (
      <form className={cx("wrapper", "flex flex-col")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div className="flex flex-col gap-4 w-full">
            <div>
               <Input
                  value={getValues("accountName") || ""}
                  placeholder="Tài khoản"
                  register={{ ...register("accountName") }}
                  field="Tài khoản"
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={() => handleBlurInput("accountName")}
                  onChange={(e) => handleChangeFormData(e, "accountName")}
               />
               {errors.accountName?.message && (
                  <p className={`text-thirtieth-color font-[700] mt-1`}>{errors.accountName.message}</p>
               )}
            </div>
            <div>
               <Input
                  value={getValues("password") || ""}
                  type="password"
                  placeholder="Mật khẩu"
                  register={{ ...register("password") }}
                  field="Mật khẩu"
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={() => handleBlurInput("password")}
                  onChange={(e) => handleChangeFormData(e, "password", true)}
               />
               {errors.password?.message && <p className={`text-thirtieth-color font-[700] mt-1`}>{errors.password.message}</p>}
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
