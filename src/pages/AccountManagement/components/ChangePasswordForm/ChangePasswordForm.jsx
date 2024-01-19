import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { schema } from "../../../../reactHookFormSchema";

import styles from "./ChangePasswordForm.module.scss";

const cx = classNames.bind(styles);

function ChangePasswordForm({ onClickCancelBtn }) {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      clearErrors,
      setValue,
      getValues,
   } = useForm({
      resolver: yupResolver(schema.changePasswordSchema),
   });

   const handleChangeFormData = (e, key) => {
      setValue(key, e.target.value);
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
      <form className={cx("wrapper", "flex flex-col")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div className="flex flex-col gap-4 w-full">
            <div>
               <Input
                  value={getValues("Mật khẩu cũ") || ""}
                  type="password"
                  register={{ ...register("Mật khẩu cũ") }}
                  field="Mật khẩu cũ"
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`bg-white border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={(e) => handleBlurInput(e, "Mật khẩu cũ")}
                  onChange={(e) => handleChangeFormData(e, "Mật khẩu cũ")}
               />
               {errors["Mật khẩu cũ"]?.message && (
                  <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Mật khẩu cũ"].message}</p>
               )}
            </div>
            <div>
               <Input
                  value={getValues("Mật khẩu mới") || ""}
                  type="password"
                  register={{ ...register("Mật khẩu mới") }}
                  field="Mật khẩu mới"
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`bg-white border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={(e) => handleBlurInput(e, "Mật khẩu mới")}
                  onChange={(e) => handleChangeFormData(e, "Mật khẩu mới", true)}
               />
               {errors["Mật khẩu mới"]?.message && (
                  <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Mật khẩu mới"].message}</p>
               )}
            </div>
            <div>
               <Input
                  value={getValues("Xác nhận mật khẩu mới") || ""}
                  type="password"
                  register={{ ...register("Xác nhận mật khẩu mới") }}
                  field="Xác nhận mật khẩu mới"
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`bg-white border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px]`}
                  inputRightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                  onBlur={(e) => handleBlurInput(e, "Xác nhận mật khẩu mới")}
                  onChange={(e) => handleChangeFormData(e, "Xác nhận mật khẩu mới", true)}
               />
               {errors["Xác nhận mật khẩu mới"]?.message && (
                  <p className={`text-thirtieth-color font-[700] mt-1`}>{errors["Xác nhận mật khẩu mới"].message}</p>
               )}
            </div>
            <div className={`my-4 flex gap-4 justify-center`}>
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
