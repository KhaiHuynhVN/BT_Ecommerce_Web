import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames/bind";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";
import { schema } from "../../../../../reactHookFormSchema";
import routesConfig from "../../../../../routesConfig";
import { userServices } from "../../../../../services";
import authSlice from "../../../../../store/authSlice";
import { regex } from "../../../../../utils";

import styles from "./SignInForm.module.scss";

const cx = classNames.bind(styles);

function SignInForm() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();
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
      setValue,
      clearErrors,
      getValues,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema.signInFormSchema),
   });

   const handleChangeFormData = (e, key, isPassword) => {
      setValue(key, isPassword ? e.target.value : e.target.value.trimStart());
      errors && clearErrors(key);

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

   return (
      <form className={cx("wrapper", "p-[0.5rem] bg-nonary-color grid gap-2")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div>
            <Input
               value={getValues("accountName") || ""}
               placeholder="Email hoặc điện thoại"
               register={{ ...register("accountName") }}
               field={"Tài khoản"}
               labelCl={"flex items-center"}
               fieldCl={"text-octonary-color w-[135px] text-[1rem] flex-shrink-0"}
               inputWrapperCl={"flex-1"}
               inputCl={`bg-white text-[16px] p-[0.5rem] border-solid border-[1px] border-black w-full focus:outline 
               focus:outline-[1px] focus:outline-black`}
               fieldLeftIcon={<i className="bi bi-file-earmark-person text-septenary-color"></i>}
               onChange={(e) => handleChangeFormData(e, "accountName")}
            />
            {isSignInFailed && <p className="text-[16px] pt-1 ml-[135px] text-red-500">Tài khoản không tồn tại!</p>}
         </div>
         <Input
            value={getValues("password") || ""}
            type="password"
            register={{ ...register("password") }}
            labelCl={"flex items-center"}
            fieldCl={"text-octonary-color w-[135px] text-[1rem] flex-shrink-0"}
            field={"Mật khẩu"}
            inputWrapperCl={"flex-1"}
            inputCl={`bg-white text-[16px] p-[0.5rem] border-solid border-[1px] border-black w-full focus:outline 
            focus:outline-[1px] focus:outline-black`}
            fieldLeftIcon={<i className="bi bi-key-fill text-septenary-color"></i>}
            onChange={(e) => handleChangeFormData(e, "password", true)}
         />
         <div className="flex items-center">
            <Button to={routesConfig.forgotPassword.path} className="w-[135px] hover:text-twelfth-color">
               Quên mật khẩu?
            </Button>
            <Button
               className={"bg-eleventh-color flex text-white py-[0.5rem] px-[0.7rem] rounded-[3px]"}
               leftIcon={<i className={"bi bi-lock text-denary-color text-[1.1rem] font-[400]"}></i>}
               fallbackLeftIcon={<i className={"bi bi-unlock text-denary-color text-[1.1rem] font-[400]"}></i>}
            >
               Đăng nhập
            </Button>
         </div>
      </form>
   );
}

export default SignInForm;
