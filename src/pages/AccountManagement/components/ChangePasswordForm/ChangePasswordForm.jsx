import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import { schema } from "../../../../reactHookFormSchema";
import { userServices } from "../../../../services";
import routesConfig from "../../../../routesConfig";
import authSlice from "../../../../store/authSlice";

import styles from "./ChangePasswordForm.module.scss";

const cx = classNames.bind(styles);

function ChangePasswordForm({ onClickCancelBtn }) {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [isWrongPassword, setIsWrongPassword] = useState(false);

   const { mutate } = useMutation({
      mutationFn: (data) => userServices.changePasswordService(data),
      onSuccess: (data) => {
         console.log(data);
         dispatch(authSlice.actions.clearUserData());
         navigate(routesConfig.signIn.path);
      },
      onError: (err) => {
         console.log("ChangePasswordForm err: ", err);
         setIsWrongPassword(true);
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
      resolver: yupResolver(schema.changePasswordSchema),
   });

   const handleChangeFormData = (e, key) => {
      setValue(key, e.target.value);
      clearErrors(key);
      key === "oldPassword" && setIsWrongPassword(false);
   };

   const onSubmitHandle = (data) => {
      const { oldPassword, newPassword } = data;

      const newData = {
         oldPassword,
         newPassword,
      };

      if (!Object.keys(errors).length) {
         console.log(newData);
         mutate(newData);
      }
   };

   const handleBlurInput = (key) => {
      Object.keys(errors).length && trigger(key);
      key === "newPassword" && Object.keys(errors).length && trigger("confirmNewPassword");
   };

   return (
      <form className={cx("wrapper", "flex flex-col")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div className="flex flex-col gap-4 w-full">
            <div>
               <Input
                  value={getValues("oldPassword") || ""}
                  type="password"
                  register={{ ...register("oldPassword") }}
                  field="Mật khẩu cũ"
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`bg-white border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={() => handleBlurInput("oldPassword")}
                  onChange={(e) => handleChangeFormData(e, "oldPassword")}
               />
               {errors.oldPassword?.message && <p className={`text-tertiary-color mt-1`}>{errors.oldPassword.message}</p>}
               {isWrongPassword && <p className={`text-tertiary-color mt-1`}>Mật khẩu không đúng!</p>}
            </div>
            <div>
               <Input
                  value={getValues("newPassword") || ""}
                  type="password"
                  register={{ ...register("newPassword") }}
                  field="Mật khẩu mới"
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`bg-white border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={() => handleBlurInput("newPassword")}
                  onChange={(e) => handleChangeFormData(e, "newPassword", true)}
               />
               {errors.newPassword?.message && <p className={`text-tertiary-color mt-1`}>{errors.newPassword.message}</p>}
            </div>
            <div>
               <Input
                  value={getValues("confirmNewPassword") || ""}
                  type="password"
                  register={{ ...register("confirmNewPassword") }}
                  field="Xác nhận mật khẩu mới"
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`bg-white border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={() => handleBlurInput("confirmNewPassword")}
                  onChange={(e) => handleChangeFormData(e, "confirmNewPassword", true)}
               />
               {errors.confirmNewPassword?.message && (
                  <p className={`text-tertiary-color mt-1`}>{errors.confirmNewPassword.message}</p>
               )}
            </div>
            <div className={`my-4 flex flex-wrap gap-4 justify-center`}>
               <Button primary leftIcon={<i className="bi bi-arrow-counterclockwise text-denary-color"></i>}>
                  Cập nhật
               </Button>
               <Button
                  primary
                  leftIcon={<i className="bi bi-x-lg text-denary-color"></i>}
                  onClick={(e) => {
                     e.preventDefault();
                     onClickCancelBtn();
                  }}
               >
                  Hủy
               </Button>
            </div>
         </div>
      </form>
   );
}

ChangePasswordForm.propTypes = {
   onClickCancelBtn: PropTypes.func,
};

export default ChangePasswordForm;
