import * as yup from "yup";

const signUpFormSchema = yup
   .object()
   .shape({
      fullName: yup.string().default("").required("Vui lòng nhập họ tên!"),
      phoneNumber: yup
         .string()
         .default("")
         .required("Vui lòng nhập số điện thoại!")
         .matches(/^(0)[0-9]{6,14}$/, "Số điện thoại không hợp lệ!"),
      email: yup
         .string()
         .default("")
         .required("Vui lòng nhập email!")
         .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Trường này phải là email!"),
      password: yup.string().default("").required("Vui lòng nhập mật khẩu!").min(6, "6 ký tự trở lên"),
      confirmPassword: yup
         .string()
         .default("")
         .required("Vui lòng xác nhận mật khẩu!")
         .oneOf([yup.ref("password")], "Mật khẩu không khớp!"),
      address: yup.string().default("").required("Vui lòng nhập địa chỉ!"),
      province: yup.string().default("").required("Vui lòng chọn tỉnh thành!"),
      district: yup.string().default("").required("Vui lòng chọn quận huyện!"),
      recaptcha: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").default(false).required(),
      accepTerm: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").default(true).required(),
      accepPromotion: yup.boolean().default(true),
   })
   .required();

const buyNowFormSchema = yup
   .object()
   .shape({
      fullName: yup.string().default("").required("Vui lòng nhập họ tên!"),
      phoneNumber: yup
         .string()
         .default("")
         .required("Vui lòng nhập số điện thoại!")
         .matches(/^(0)[0-9]{6,14}$/, "Số điện thoại không hợp lệ!"),
      email: yup
         .string()
         .default("")
         .required("Vui lòng nhập email!")
         .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Trường này phải là email!"),
      address: yup.string().default("").required("Vui lòng nhập địa chỉ!"),
      province: yup.string().default("").required("Vui lòng chọn tỉnh thành!"),
      district: yup.string().default("").required("Vui lòng chọn quận huyện!"),
      recaptcha: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").default(false).required(),
      accepTerm: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").default(true).required(),
   })
   .required();

const signInFormSchema = yup
   .object()
   .shape({
      accountName: yup.string().default("").required("Vui lòng nhập email hoặc số điện thoại!!"),
      password: yup.string().default("").required("Vui lòng nhập mật khẩu!"),
   })
   .required();

const commentFormSchema = yup
   .object()
   .shape({
      fullName: yup.string().default("").required("Vui lòng nhập họ tên!"),
      email: yup
         .string()
         .required("Vui lòng nhập email!")
         .default("")
         .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Trường này phải là email!"),
      content: yup.string().required("Vui lòng nhập nội dung!"),
   })
   .required();

const forgotPasswordSchema = yup
   .object()
   .shape({
      email: yup
         .string()
         .default("")
         .required("Vui lòng nhập email!")
         .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Trường này phải là email!"),
      recaptcha: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").default(false).required(),
   })
   .required();

const changePasswordSchema = yup
   .object()
   .shape({
      ["Mật khẩu cũ"]: yup.string().default("").required("Vui lòng nhập mật khẩu cũ!").min(6, "6 ký tự trở lên"),
      ["Mật khẩu mới"]: yup.string().default("").required("Vui lòng nhập mật khẩu mới!").min(6, "6 ký tự trở lên"),
      ["Xác nhận mật khẩu mới"]: yup
         .string()
         .oneOf([yup.ref("Mật khẩu mới")], "Mật khẩu không khớp!")
         .default("")
         .required("Vui lòng xác nhận mật khẩu mới!"),
   })
   .required();

const userDetailsFormSchema = yup
   .object()
   .shape({
      fullName: yup.string().default("").required("Vui lòng nhập họ tên!"),
      phoneNumber: yup
         .string()
         .default("")
         .required("Vui lòng nhập số điện thoại!")
         .matches(/^(0)[0-9]{6,14}$/, "Số điện thoại không hợp lệ!"),
      email: yup
         .string()
         .default("")
         .required("Vui lòng nhập email!")
         .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Trường này phải là email!"),
      address: yup.string().default("").required("Vui lòng nhập địa chỉ!"),
      province: yup.string().default("").required("Vui lòng chọn tỉnh thành!"),
      district: yup.string().default("").required("Vui lòng chọn quận huyện!"),
   })
   .required();

export {
   signUpFormSchema,
   signInFormSchema,
   commentFormSchema,
   buyNowFormSchema,
   forgotPasswordSchema,
   changePasswordSchema,
   userDetailsFormSchema,
};
