import * as yup from "yup";

const signUpFormSchema = yup
   .object()
   .shape({
      ["Họ tên"]: yup.string().default("").required("Vui lòng nhập họ tên!"),
      ["Điện thoại"]: yup
         .string()
         .default("")
         .required("Vui lòng nhập số điện thoại!")
         .matches(/^(0)[0-9]{6,14}$/, "Số điện thoại không hợp lệ!"),
      ["Email"]: yup
         .string()
         .default("")
         .required("Vui lòng nhập email!")
         .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Trường này phải là email!"),
      ["Mật khẩu"]: yup.string().default("").required("Vui lòng nhập mật khẩu!").min(6, "6 ký tự trở lên"),
      ["Xác nhận mật khẩu"]: yup
         .string()
         .default("")
         .required("Vui lòng xác nhận mật khẩu!")
         .oneOf([yup.ref("Mật khẩu")], "Mật khẩu không khớp!"),
      ["Địa chỉ"]: yup.string().default("").required("Vui lòng nhập địa chỉ!"),
      ["Tỉnh/thành"]: yup.string().default("").required("Vui lòng chọn tỉnh thành!"),
      ["Quận/huyện"]: yup.string().default("").required("Vui lòng chọn quận huyện!"),
      recaptcha: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").default(false).required(),
      accepTerm: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").default(true).required(),
      accepPromotion: yup.boolean().default(false),
   })
   .required();

const buyNowFormSchema = yup
   .object()
   .shape({
      ["Họ tên"]: yup.string().default("").required("Vui lòng nhập họ tên!"),
      ["Điện thoại"]: yup
         .string()
         .default("")
         .required("Vui lòng nhập số điện thoại!")
         .matches(/^(0)[0-9]{6,14}$/, "Số điện thoại không hợp lệ!"),
      ["Email"]: yup
         .string()
         .default("")
         .required("Vui lòng nhập email!")
         .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Trường này phải là email!"),
      ["Địa chỉ"]: yup.string().default("").required("Vui lòng nhập địa chỉ!"),
      ["Tỉnh/thành"]: yup.string().default("").required("Vui lòng chọn tỉnh thành!"),
      ["Quận/huyện"]: yup.string().default("").required("Vui lòng chọn quận huyện!"),
      recaptcha: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").default(false).required(),
      accepTerm: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").default(true).required(),
   })
   .required();

const signInFormSchema = yup
   .object()
   .shape({
      ["Tài khoản"]: yup.string().default("").required("Vui lòng nhập email hoặc số điện thoại!!"),
      ["Mật khẩu"]: yup.string().default("").required("Vui lòng nhập mật khẩu!"),
   })
   .required();

const commentFormSchema = yup
   .object()
   .shape({
      ["Họ tên"]: yup.string().default("").required("Vui lòng nhập họ tên!"),
      ["Email"]: yup
         .string()
         .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Trường này phải là email!")
         .default("")
         .required("Vui lòng nhập email!"),
      ["Nội dung"]: yup.string().required("Vui lòng nhập nội dung!"),
   })
   .required();

const forgotPasswordSchema = yup
   .object()
   .shape({
      ["Email"]: yup
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
      ["Họ tên"]: yup.string().default("").required("Vui lòng nhập họ tên!"),
      ["Điện thoại"]: yup
         .string()
         .default("")
         .required("Vui lòng nhập số điện thoại!")
         .matches(/^(0)[0-9]{6,14}$/, "Số điện thoại không hợp lệ!"),
      ["Email"]: yup
         .string()
         .default("")
         .required("Vui lòng nhập email!")
         .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Trường này phải là email!"),
      ["Địa chỉ"]: yup.string().default("").required("Vui lòng nhập địa chỉ!"),
      ["Tỉnh/thành"]: yup.string().default("").required("Vui lòng chọn tỉnh thành!"),
      ["Quận/huyện"]: yup.string().default("").required("Vui lòng chọn quận huyện!"),
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
