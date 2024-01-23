/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { schema } from "../../../../reactHookFormSchema";
import routesConfig from "../../../../routesConfig";

import styles from "./SignInForm.module.scss";

const cx = classNames.bind(styles);

function SignInForm() {
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

   const handleChangeFormData = (e, key, isPassword) => {
      setValue(key, isPassword ? e.target.value : e.target.value.trimStart());
      clearErrors(key);
   };

   const onSubmitHandle = (data) => {
      console.log(data);
      const arrErrors = Object.keys(errors);
      !arrErrors.length && reset();
   };

   const handleBlurInput = (e, key) => {
      const value = e.target.value;
      const arrErrors = Object.keys(errors);
      arrErrors.length && setValue(key, value, { shouldValidate: true });
   };

   return (
      <form className={cx("wrapper", "flex flex-col items-center")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div className={cx("form-container-wrapper", "flex flex-col")}>
            <div className={cx("form-container", "flex flex-col gap-4 items-start")}>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("Tài khoản") || ""}
                     placeholder="Email hoặc số điện thoại"
                     register={{ ...register("Tài khoản") }}
                     field="Tài khoản"
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "Tài khoản")}
                     onChange={(e) => handleChangeFormData(e, "Tài khoản")}
                  />
                  {errors["Tài khoản"]?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors["Tài khoản"].message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("Mật khẩu") || ""}
                     type="password"
                     register={{ ...register("Mật khẩu") }}
                     field="Mật khẩu"
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "Mật khẩu")}
                     onChange={(e) => handleChangeFormData(e, "Mật khẩu", true)}
                  />
                  {errors["Mật khẩu"]?.message && (
                     <p className={cx("err-msg", `text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors["Mật khẩu"].message}
                     </p>
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
            <div className="my-4">
               <Button
                  primary
                  className={`mt-4 mx-auto`}
                  leftIcon={<i className="bi bi-file-earmark-person text-secondary-color"></i>}
               >
                  Đăng nhập
               </Button>
            </div>
         </div>
      </form>
   );
}

export default SignInForm;
