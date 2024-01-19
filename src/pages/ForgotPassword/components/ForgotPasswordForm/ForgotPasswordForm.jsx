import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { schema } from "../../../../reactHookFormSchema";

import styles from "./ForgotPasswordForm.module.scss";

const cx = classNames.bind(styles);

function ForgotPasswordForm() {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      clearErrors,
      setValue,
      getValues,
   } = useForm({
      resolver: yupResolver(schema.forgotPasswordSchema),
   });

   const handleChangeFormData = (e, key) => {
      setValue(key, e.target.value.trimStart());
      clearErrors(key);
   };

   const handleReCaptcha = (value) => {
      setValue("recaptcha", value ? true : false, { shouldValidate: value ? true : false });
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
      <form className={cx("wrapper", "flex flex-col items-center mt-[1rem]")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div className="flex flex-col items-start">
            <div className="flex flex-col gap-4">
               <div className="flex items-center relative">
                  <Input
                     value={getValues("Email") || ""}
                     field="Email"
                     register={{ ...register("Email") }}
                     type="text"
                     fieldCl="text-[16px] mr-2 absolute right-[100%] text-nowrap"
                     labelCl={`flex justify-end relative`}
                     inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={(e) => handleBlurInput(e, "Email")}
                     onChange={(e) => handleChangeFormData(e, "Email")}
                  />
                  {errors["Email"]?.message && (
                     <p className={`text-thirtieth-color font-[700] ml-1 absolute left-[100%] text-nowrap`}>
                        {errors["Email"].message}
                     </p>
                  )}
               </div>
            </div>
            <div className="my-4">
               <div>
                  <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_KEY} onChange={handleReCaptcha} />
                  {errors["recaptcha"]?.message && (
                     <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["recaptcha"].message}</p>
                  )}
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
