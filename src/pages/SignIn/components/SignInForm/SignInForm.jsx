import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import { schema } from "../../../../reactHookFormSchema";
import routesConfig from "../../../../routesConfig";
import { userServices } from "../../../../services";
import { regex } from "../../../../utils";
import authSlice from "../../../../store/authSlice";

import styles from "./SignInForm.module.scss";

const cx = classNames.bind(styles);

function SignInForm() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [isSignInFailed, setIsSignInFailed] = useState(false);

   const { mutate } = useMutation({
      mutationFn: (data) => userServices.signInService(data),
      onSuccess: async (data) => {
         const { accessToken, refreshToken } = data.data;

         dispatch(authSlice.actions.setToken(accessToken));
         dispatch(authSlice.actions.setRefreshToken(refreshToken));

         try {
            const userData = await userServices.getUserInfoService();

            dispatch(authSlice.actions.setUserData(userData.data));
            if (location.pathname !== routesConfig.home.path) {
               navigate(routesConfig.home.path);
            }
         } catch (error) {
            console.log(error);
         }
      },
      onError: (error) => {
         setIsSignInFailed(true);
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
      resolver: yupResolver(schema.signInFormSchema),
   });

   const handleChangeFormData = (e, key, isPassword) => {
      setValue(key, isPassword ? e.target.value : e.target.value.trimStart());
      clearErrors(key);
      setIsSignInFailed(false);
   };

   const onSubmitHandle = (data) => {
      const { accountName, password } = data;
      const key = regex.emailRegex.test(accountName) ? "email" : "phone";

      const newData = {
         [key]: key === "phone" && !accountName.startsWith("+84") ? `+84${accountName.replace(/^0+/, "")}` : accountName,
         password,
         mfaCode: "",
      };

      if (!Object.keys(errors).length) {
         mutate(newData);
      }
   };

   const handleBlurInput = (key) => {
      Object.keys(errors).length && trigger(key);
   };

   return (
      <form className={cx("wrapper", "flex flex-col items-center")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div className={cx("form-container-wrapper", "flex flex-col")}>
            <div className={cx("form-container", "flex flex-col gap-4 items-start")}>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("accountName") || ""}
                     placeholder="Email hoặc số điện thoại"
                     register={{ ...register("accountName") }}
                     field="Tài khoản"
                     labelCl={cx("field-label", `flex justify-end relative`)}
                     fieldCl={cx("field", "text-[16px] mr-2 absolute right-[100%] text-nowrap")}
                     inputCl={cx(
                        "input",
                        `border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                     outline-1 w-[500px] rounded-[3px]`,
                     )}
                     inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onBlur={() => handleBlurInput("accountName")}
                     onChange={(e) => handleChangeFormData(e, "accountName")}
                  />
                  {errors.accountName?.message && (
                     <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors.accountName.message}
                     </p>
                  )}
               </div>
               <div className={cx("field-item", "flex items-center relative")}>
                  <Input
                     value={getValues("password") || ""}
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
                     onChange={(e) => handleChangeFormData(e, "password", true)}
                  />
                  {errors.password?.message && (
                     <p className={cx("err-msg", `text-tertiary-color ml-1 absolute left-[100%] text-nowrap`)}>
                        {errors.password.message}
                     </p>
                  )}
               </div>
               {isSignInFailed && <span className={`block text-forty-second-color`}>Tài khoản không tồn tại!</span>}
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
