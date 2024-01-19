import classNames from "classnames/bind";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Input from "../Input";
import Button from "../Button";
import { schema } from "../../reactHookFormSchema";

import styles from "./CommentForm.module.scss";

const cx = classNames.bind(styles);

function CommentForm() {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      clearErrors,
      setValue,
      getValues,
   } = useForm({
      resolver: yupResolver(schema.commentFormSchema),
   });

   const handleChangeFormData = (e, key) => {
      setValue(key, e.target.value.trimStart());
      clearErrors(key);
   };

   const onSubmitHandle = (data) => {
      console.log(data);
      reset();
   };

   const handleBlurInput = (e, key) => {
      const value = e.target.value;
      const arrErrors = Object.keys(errors);
      arrErrors.length && setValue(key, value, { shouldValidate: true });
   };

   return (
      <form className={cx("wrapper", "w-[840px]")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div className={`flex gap-2`}>
            <div className={cx("name-input-container", `flex items-center`)}>
               <Input
                  value={getValues("Họ tên") || ""}
                  placeholder="Họ tên..."
                  register={{ ...register("Họ tên") }}
                  inputCl={`border border-solid border-black focus:outline focus:outline-black focus:outline-[1px] bg-white 
                  focus:bg-forty-first-color p-[4px_8px] text-[16px] w-[320px]`}
                  inputRightIcon={<span className={`text-forty-second-color`}>*</span>}
                  onChange={(e) => handleChangeFormData(e, "Họ tên")}
                  onBlur={(e) => handleBlurInput(e, "Họ tên")}
               />
               {errors["Họ tên"] && (
                  <span className={cx("error-msg", `text-forty-second-color text-[16px] ml-2`)}>{errors["Họ tên"].message}</span>
               )}
            </div>
            <div className={`flex items-center relative`}>
               <Input
                  value={getValues("Email") || ""}
                  placeholder="Email..."
                  register={{ ...register("Email") }}
                  inputCl={`border border-solid border-black focus:outline focus:outline-black focus:outline-[1px] bg-white 
                   focus:bg-forty-first-color p-[4px_8px] text-[16px] w-[320px]`}
                  inputRightIcon={<span className={`text-forty-second-color`}>*</span>}
                  onChange={(e) => handleChangeFormData(e, "Email")}
                  onBlur={(e) => handleBlurInput(e, "Email")}
               />
               {errors["Email"] && (
                  <span className={`text-forty-second-color text-[16px] ml-2 absolute left-full text-nowrap`}>
                     {errors["Email"].message}
                  </span>
               )}
            </div>
         </div>
         <div className={`flex relative`}>
            <Input
               value={getValues("Nội dung") || ""}
               placeholder="Nội dung..."
               register={{ ...register("Nội dung") }}
               wrapperCl={`mt-2 flex-1`}
               inputWrapperCl={`w-full`}
               inputCl={`border border-solid border-black focus:outline focus:outline-black focus:outline-[1px] bg-white 
                focus:bg-forty-first-color p-[4px_8px] text-[16px] w-full min-h-[92px] max-h-[250px]`}
               inputRightIcon={<span className={`text-forty-second-color`}>*</span>}
               textarea
               textareaHeight={"92px"}
               onChange={(e) => handleChangeFormData(e, "Nội dung")}
               onBlur={(e) => handleBlurInput(e, "Nội dung")}
            />
            {errors["Nội dung"] && (
               <span className={`text-forty-second-color text-[16px] ml-2 absolute left-full text-nowrap top-2`}>
                  {errors["Nội dung"].message}
               </span>
            )}
         </div>
         <Button
            className={`mt-4 bg-seventeenth-color text-[17.6px] p-[8px_11.2px] text-white`}
            leftIcon={<i className="bi bi-send-fill text-forty-third-color"></i>}
         >
            Gửi đánh giá
         </Button>
      </form>
   );
}

export default CommentForm;
