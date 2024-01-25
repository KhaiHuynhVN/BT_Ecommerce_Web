import classNames from "classnames/bind";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { schema } from "../../../../reactHookFormSchema";

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
      trigger,
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

   const handleBlurInput = (key) => {
      Object.keys(errors).length && trigger(key);
   };

   return (
      <form className={cx("wrapper", "w-[840px]")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div className={cx("field-wrapper")}>
            <div className={cx("field-wrapper-top", `flex gap-2`)}>
               <div className={cx("name-input-container", "field-wrapper-top__field-item", `flex items-center`)}>
                  <Input
                     value={getValues("fullName") || ""}
                     placeholder="Họ tên..."
                     register={{ ...register("fullName") }}
                     wrapperCl={cx("input-wrapper-main")}
                     inputWrapperCl={cx("input-wrapper")}
                     inputCl={cx(
                        "input",
                        `border border-solid border-black focus:outline focus:outline-black focus:outline-[1px] bg-white 
                     focus:bg-forty-first-color p-[4px_8px] text-[16px] w-[320px]`,
                     )}
                     inputRightIcon={<span className={`text-forty-second-color`}>*</span>}
                     onChange={(e) => handleChangeFormData(e, "fullName")}
                     onBlur={() => handleBlurInput("fullName")}
                  />
                  {errors.fullName && (
                     <span className={cx("err-msg", `text-forty-second-color block text-[16px] ml-2`)}>
                        {errors.fullName.message}
                     </span>
                  )}
               </div>
               <div className={cx("field-wrapper-top__field-item", `flex items-center relative`)}>
                  <Input
                     value={getValues("email") || ""}
                     type="email"
                     placeholder="Email..."
                     register={{ ...register("email") }}
                     wrapperCl={cx("input-wrapper-main")}
                     inputWrapperCl={cx("input-wrapper")}
                     inputCl={cx(
                        "input",
                        `border border-solid border-black focus:outline focus:outline-black focus:outline-[1px] bg-white 
                     focus:bg-forty-first-color p-[4px_8px] text-[16px] w-[320px]`,
                     )}
                     inputRightIcon={<span className={`text-forty-second-color`}>*</span>}
                     onChange={(e) => handleChangeFormData(e, "email")}
                     onBlur={() => handleBlurInput("email")}
                     onInvalid={(e) => e.preventDefault()}
                  />
                  {errors.email && (
                     <span
                        className={cx("err-msg", `text-forty-second-color block text-[16px] ml-2 absolute left-full text-nowrap`)}
                     >
                        {errors.email.message}
                     </span>
                  )}
               </div>
            </div>
            <div className={cx("field-item", `flex relative`)}>
               <Input
                  value={getValues("content") || ""}
                  placeholder="Nội dung..."
                  register={{ ...register("content") }}
                  textarea
                  textareaHeight={"92px"}
                  wrapperCl={`mt-2 flex-1`}
                  inputWrapperCl={`w-full`}
                  inputCl={`border border-solid border-black focus:outline focus:outline-black focus:outline-[1px] bg-white 
                  focus:bg-forty-first-color p-[4px_8px] text-[16px] w-full min-h-[92px] max-h-[250px]`}
                  inputRightIcon={<span className={`text-forty-second-color`}>*</span>}
                  onChange={(e) => handleChangeFormData(e, "content")}
                  onBlur={() => handleBlurInput("content")}
               />
               {errors.content && (
                  <span
                     className={cx(
                        "err-msg",
                        `text-forty-second-color block text-[16px] ml-2 absolute left-full text-nowrap top-2`,
                     )}
                  >
                     {errors.content.message}
                  </span>
               )}
            </div>
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
