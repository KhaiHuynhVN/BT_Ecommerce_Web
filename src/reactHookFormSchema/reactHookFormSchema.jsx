import * as yup from "yup";

const signUpFormSchema = yup
   .object()
   .shape({
      ["Họ tên"]: yup.string().required("Vui lòng nhập họ tên!"),
      ["Điện thoại"]: yup.string().required("Vui lòng nhập số điện thoại!"),
      ["Email"]: yup
         .string()
         .required("Vui lòng nhập email!")
         .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Trường này phải là email!"),
      ["Mật khẩu"]: yup.string().required("Vui lòng nhập mật khẩu!").min(6, "6 ký tự trở lên"),
      ["Xác nhận mật khẩu"]: yup
         .string()
         .required("Vui lòng xác nhận mật khẩu!")
         .oneOf([yup.ref("Mật khẩu")], "Mật khẩu không khớp!"),
      ["Địa chỉ"]: yup.string().required("Vui lòng nhập địa chỉ!"),
      ["Tỉnh/thành"]: yup.string().required("Vui lòng chọn tỉnh thành!"),
      ["Quận/huyện"]: yup.string().required("Vui lòng chọn quận huyện!"),
      recaptcha: yup.boolean().required("Vui lòng hoàn thành reCAPTCHA!"),
      accepTerm: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").required(),
      accepPromotion: yup.boolean(),
   })
   .required();

const buyNowFormSchema = yup
   .object()
   .shape({
      ["Họ tên"]: yup.string().required("Vui lòng nhập họ tên!"),
      ["Điện thoại"]: yup.string().required("Vui lòng nhập số điện thoại!"),
      ["Email"]: yup
         .string()
         .required("Vui lòng nhập email!")
         .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Trường này phải là email!"),
      ["Địa chỉ"]: yup.string().required("Vui lòng nhập địa chỉ!"),
      ["Tỉnh/thành"]: yup.string().required("Vui lòng chọn tỉnh thành!"),
      ["Quận/huyện"]: yup.string().required("Vui lòng chọn quận huyện!"),
      recaptcha: yup.boolean().required("Vui lòng hoàn thành reCAPTCHA!"),
      accepTerm: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").required(),
   })
   .required();

const signInFormSchema = yup
   .object()
   .shape({
      ["Tài khoản"]: yup.string().required("Vui lòng nhập email hoặc số điện thoại!!"),
      ["Mật khẩu"]: yup.string().required("Vui lòng nhập mật khẩu!"),
   })
   .required();

const commentFormSchema = yup
   .object()
   .shape({
      ["Họ tên"]: yup.string().required("Vui lòng nhập họ tên!"),
      ["Email"]: yup
         .string()
         .required("Vui lòng nhập email!")
         .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Trường này phải là email!"),
      ["Nội dung"]: yup.string().required("Vui lòng nhập nội dung!"),
   })
   .required();

const forgotPasswordSchema = yup
   .object()
   .shape({
      ["Email"]: yup
         .string()
         .required("Vui lòng nhập email!")
         .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Trường này phải là email!"),
      recaptcha: yup.boolean().required("Vui lòng hoàn thành reCAPTCHA!"),
   })
   .required();

export { signUpFormSchema, signInFormSchema, commentFormSchema, buyNowFormSchema, forgotPasswordSchema };
