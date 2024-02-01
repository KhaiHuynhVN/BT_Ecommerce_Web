import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { schema } from "../../../../reactHookFormSchema";
import { userServices } from "../../../../services";
import routesConfig from "../../../../routesConfig";

import styles from "./ForgotPasswordForm.module.scss";

const cx = classNames.bind(styles);

function ForgotPasswordForm() {
   const navigate = useNavigate();
   const [isUserNotFound, setIsUserNotFound] = useState(false);

   const { mutate } = useMutation({
      mutationFn: (data) => userServices.resetPasswordService(data),
      onSuccess: (data) => {
         console.log(data);
         navigate(routesConfig.resetPassword.path);
      },
      onError: (error) => {
         console.log(error);
         setIsUserNotFound(true);
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
      resolver: yupResolver(schema.forgotPasswordSchema),
   });

   const handleChangeFormData = (e, key) => {
      setValue(key, e.target.value.trimStart());
      clearErrors(key);
      setIsUserNotFound(false);
   };

   const handleReCaptcha = (value) => {
      setValue("recaptcha", !!value, { shouldValidate: !!value });
   };

   const onSubmitHandle = (data) => {
      const { email } = data;

      const newData = {
         email,
      };

      if (!Object.keys(errors).length) {
         console.log(newData);
         mutate(newData);
      }
   };

   const handleBlurInput = (key) => {
      Object.keys(errors).length && trigger(key);
   };

   return (
      <form className={cx("wrapper", "flex flex-col items-center mt-[1rem]")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div className={cx("form-container-wrapper", "flex flex-col items-start")}>
            <div className={cx("form-container", "flex flex-col gap-4")}>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("email") || ""}
                     type="email"
                     register={{ ...register("email") }}
                     field="Email"
                     labelCl={cx("label", `flex justify-end relative`)}
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
                  {isUserNotFound && (
                     <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
                        Tài khoản không tồn tại!
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

export default ForgotPasswordForm;
