import { useState } from "react";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import { schema } from "../../../../../reactHookFormSchema";
import routesConfig from "../../../../../routesConfig";

import styles from "./SignInForm.module.scss";

const cx = classNames.bind(styles);

function SignInForm() {
   const [accountIncorrect, setAccountIncorrect] = useState(false);

   const {
      register,
      handleSubmit,
      reset,
      setValue,
      clearErrors,
      getValues,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema.signInFormSchema),
   });

   const handleChangeFormData = (e, key) => {
      setValue(key, e.target.value.trimStart());
      errors && clearErrors(key);

      setAccountIncorrect(false);
   };

   const onSubmitHandle = (data) => {
      console.log(data);
      setAccountIncorrect(true);
      reset();
   };

   return (
      <form className={cx("wrapper", "p-[0.5rem] bg-nonary-color grid gap-2")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div>
            <Input
               value={getValues("Tài khoản") || ""}
               register={{ ...register("Tài khoản") }}
               labelCl={"flex justify-between items-center"}
               fieldCl={"text-octonary-color w-[135px] text-[1rem] flex-shrink-0"}
               field={"Tài khoản"}
               fieldLeftIcon={<i className="bi bi-file-earmark-person text-septenary-color"></i>}
               type="text"
               placeholder="Email hoặc điện thoại"
               inputCl={`bg-white text-[16px] p-[0.5rem] border-solid border-[1px] border-black w-full focus:outline 
               focus:outline-[1px] focus:outline-black`}
               onChange={(e) => handleChangeFormData(e, "Tài khoản")}
            />
            {accountIncorrect && <p className="text-[16px] pt-1 ml-[135px] text-red-500">Tài khoản không tồn tại!</p>}
         </div>
         <Input
            value={getValues("Mật khẩu") || ""}
            register={{ ...register("Mật khẩu") }}
            labelCl={"flex justify-between items-center"}
            fieldCl={"text-octonary-color w-[135px] text-[1rem] flex-shrink-0"}
            field={"Mật khẩu"}
            fieldLeftIcon={<i className="bi bi-key-fill text-septenary-color"></i>}
            type="password"
            inputCl={`bg-white text-[16px] p-[0.5rem] border-solid border-[1px] border-black w-full focus:outline 
            focus:outline-[1px] focus:outline-black`}
            onChange={(e) => handleChangeFormData(e, "Mật khẩu")}
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
