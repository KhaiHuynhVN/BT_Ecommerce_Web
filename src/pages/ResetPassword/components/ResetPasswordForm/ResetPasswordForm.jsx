import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { schema } from "../../../../reactHookFormSchema";
import { userServices } from "../../../../services";
import routesConfig from "../../../../routesConfig";

import styles from "./ResetPasswordForm.module.scss";

const cx = classNames.bind(styles);

function ResetPasswordForm() {
   const navigate = useNavigate();
   const [isTokenInvalid, setIsTokenInvalid] = useState(false);

   const { mutate } = useMutation({
      mutationFn: (data) => userServices.confirmResetPassword(data),
      onSuccess: (data) => {
         console.log(data);
         navigate(routesConfig.signIn.path);
      },
      onError: (errors) => {
         console.log(errors);
         setIsTokenInvalid(true);
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
      resolver: yupResolver(schema.resetPasswordSchema),
   });

   const handleChangeFormData = (e, key) => {
      setValue(key, e.target.value);
      clearErrors(key);
      key === "token" && setIsTokenInvalid(false);
   };

   const handleReCaptcha = (value) => {
      setValue("recaptcha", !!value, { shouldValidate: !!value });
   };

   const onSubmitHandle = (data) => {
      const { newPassword, token } = data;

      const newData = {
         newPassword,
         token,
      };

      if (!Object.keys(errors).length) {
         console.log(newData);
         mutate(newData);
      }
   };

   const handleBlurInput = (key) => {
      Object.keys(errors).length && trigger(key);
      key === "newPassword" && trigger("confirmNewPassword");
   };

   return (
      <form className={cx("wrapper", "flex flex-col items-center mt-[1rem]")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div className={cx("form-container-wrapper", "flex flex-col items-start")}>
            <div className={cx("form-container", "flex flex-col gap-4")}>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("newPassword") || ""}
                     type="password"
                     register={{ ...register("newPassword") }}
                     field="Mật khẩu mới"
                     labelCl={cx("label", `flex justify-end relative`)}
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={() => handleBlurInput("newPassword")}
                     onChange={(e) => handleChangeFormData(e, "newPassword")}
                     onInvalid={(e) => e.preventDefault()}
                  />
                  {errors.newPassword?.message && (
                     <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors.newPassword.message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("confirmNewPassword") || ""}
                     type="password"
                     register={{ ...register("confirmNewPassword") }}
                     field="Xác nhận mật khẩu mới"
                     labelCl={cx("label", `flex justify-end relative`)}
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={() => handleBlurInput("confirmNewPassword")}
                     onChange={(e) => handleChangeFormData(e, "confirmNewPassword")}
                     onInvalid={(e) => e.preventDefault()}
                  />
                  {errors.confirmNewPassword?.message && (
                     <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors.confirmNewPassword.message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("token") || ""}
                     type="password"
                     register={{ ...register("token") }}
                     field="Mã xác nhận"
                     labelCl={cx("label", `flex justify-end relative`)}
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={() => handleBlurInput("token")}
                     onChange={(e) => handleChangeFormData(e, "token")}
                     onInvalid={(e) => e.preventDefault()}
                  />
                  {errors.token?.message && (
                     <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors.token.message}
                     </p>
                  )}
                  {isTokenInvalid && (
                     <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
                        Mã xác nhận không hợp lệ
                     </p>
                  )}
               </div>
            </div>
            <div className="my-4">
               <div>
                  <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_KEY} onChange={handleReCaptcha} />
                  {errors.recaptcha?.message && <p className={`text-tertiary-color mt-1`}>{errors.recaptcha.message}</p>}
               </div>
               <Button primary className={`mt-4`} leftIcon={<i className="bi bi-send-fill text-secondary-color"></i>}>
                  Yêu cầu cấp lại mật khẩu
               </Button>
            </div>
         </div>
      </form>
   );
}

export default ResetPasswordForm;
