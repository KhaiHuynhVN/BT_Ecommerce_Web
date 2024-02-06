/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../../../../../../components/Input";
import Button from "../../../../../../components/Button";
import { schema } from "../../../../../../reactHookFormSchema";
import routesConfig from "../../../../../../routesConfig";
import { userServices } from "../../../../../../services";
import authSlice from "../../../../../../store/authSlice";
import { regex } from "../../../../../../utils";

import styles from "./SignInForm.module.scss";

const cx = classNames.bind(styles);

function SignInForm({ isReset }) {
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
               {errors.accountName?.message && <p className={`text-tertiary-color mt-1`}>{errors.accountName.message}</p>}
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
               {errors.password?.message && <p className={`text-tertiary-color mt-1`}>{errors.password.message}</p>}
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
