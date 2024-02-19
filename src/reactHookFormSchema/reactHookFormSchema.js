import * as yup from "yup";

import { regex } from "../utils";

const { phoneNumberRegex, emailRegex, passwordRegex } = regex;

const signUpFormSchema = yup
   .object()
   .shape({
      fullName: yup.string().default("").required("Vui lòng nhập họ tên!"),
      phoneNumber: yup
         .string()
         .default("")
         .required("Vui lòng nhập số điện thoại!")
         .matches(phoneNumberRegex, "Số điện thoại không hợp lệ!"),
      email: yup.string().default("").required("Vui lòng nhập email!").matches(emailRegex, "Trường này phải là email!"),
      password: yup
         .string()
         .default("")
         .required("Vui lòng nhập mật khẩu!")
         .min(6, "Ít nhất 6 ký tự!")
         .matches(passwordRegex, "Ít nhất 1: số, chữ thường, hoa, ký tự đặc biệt!"),
      confirmPassword: yup
         .string()
         .default("")
         .when("password", {
            is: (password) => password && passwordRegex.test(password),
            then: () =>
               yup.string().when("confirmPassword", {
                  is: (confirmPassword) => !confirmPassword,
                  then: () => yup.string().required("Vui lòng xác nhận mật khẩu!"),
                  otherwise: () => yup.string().oneOf([yup.ref("password")], "Mật khẩu không khớp!"),
               }),
            otherwise: () => yup.string().default(""),
         }),
      address: yup.string().default("").required("Vui lòng nhập địa chỉ!"),
      province: yup.string().default("").required("Vui lòng chọn tỉnh thành!"),
      district: yup
         .string()
         .default("")
         .test("is-province-selected", "Vui lòng chọn quận huyện!", function (value) {
            const { province } = this.parent;
            return province ? !!value : true;
         }),
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
         .matches(phoneNumberRegex, "Số điện thoại không hợp lệ!"),
      email: yup.string().default("").required("Vui lòng nhập email!").matches(emailRegex, "Trường này phải là email!"),
      address: yup.string().default("").required("Vui lòng nhập địa chỉ!"),
      province: yup.string().default("").required("Vui lòng chọn tỉnh thành!"),
      district: yup
         .string()
         .default("")
         .test("is-province-selected", "Vui lòng chọn quận huyện!", function (value) {
            const { province } = this.parent;
            return province ? !!value : true;
         }),
      recaptcha: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").default(false).required(),
      accepTerm: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").default(true).required(),
   })
   .required();

const signInFormSchema = yup
   .object()
   .shape({
      accountName: yup
         .string()
         .default("")
         .test("is-email-or-phone", "Vui lòng nhập email hoặc số điện thoại!", function (value) {
            if (phoneNumberRegex.test(value)) return true;
            if (/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) return true;
            return false;
         }),
      password: yup.string().default("").required("Vui lòng nhập mật khẩu!"),
   })
   .required();

const commentFormSchema = yup
   .object()
   .shape({
      fullName: yup.string().default("").required("Vui lòng nhập họ tên!"),
      email: yup.string().required("Vui lòng nhập email!").default("").matches(emailRegex, "Trường này phải là email!"),
      content: yup.string().required("Vui lòng nhập nội dung!"),
   })
   .required();

const forgotPasswordSchema = yup
   .object()
   .shape({
      email: yup.string().default("").required("Vui lòng nhập email!").matches(emailRegex, "Trường này phải là email!"),
      recaptcha: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").default(false).required(),
   })
   .required();

const changePasswordSchema = yup
   .object()
   .shape({
      oldPassword: yup.string().default("").required("Vui lòng nhập mật khẩu cũ!").min(6, "6 ký tự trở lên"),
      newPassword: yup
         .string()
         .default("")
         .required("Vui lòng nhập mật khẩu!")
         .min(6, "Ít nhất 6 ký tự!")
         .matches(passwordRegex, "Ít nhất 1: số, chữ thường, hoa, ký tự đặc biệt!"),
      confirmNewPassword: yup
         .string()
         .default("")
         .when("newPassword", {
            is: (newPassword) => newPassword && passwordRegex.test(newPassword),
            then: () =>
               yup.string().when("confirmNewPassword", {
                  is: (confirmNewPassword) => !confirmNewPassword,
                  then: () => yup.string().required("Vui lòng xác nhận mật khẩu!"),
                  otherwise: () => yup.string().oneOf([yup.ref("newPassword")], "Mật khẩu không khớp!"),
               }),
            otherwise: () => yup.string().default(""),
         }),
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
         .matches(phoneNumberRegex, "Số điện thoại không hợp lệ!"),
      address: yup.string().default("").required("Vui lòng nhập địa chỉ!"),
      province: yup.string().default("").required("Vui lòng chọn tỉnh thành!"),
      district: yup
         .string()
         .default("")
         .test("is-province-selected", "Vui lòng chọn quận huyện!", function (value) {
            const { province } = this.parent;
            return province ? !!value : true;
         }),
   })
   .required();

const resetPasswordSchema = yup
   .object()
   .shape({
      newPassword: yup
         .string()
         .default("")
         .required("Vui lòng nhập mật khẩu!")
         .min(6, "Ít nhất 6 ký tự!")
         .matches(passwordRegex, "Ít nhất 1: số, chữ thường, hoa, ký tự đặc biệt!"),
      confirmNewPassword: yup
         .string()
         .default("")
         .when("newPassword", {
            is: (newPassword) => newPassword && passwordRegex.test(newPassword),
            then: () =>
               yup.string().when("confirmNewPassword", {
                  is: (confirmNewPassword) => !confirmNewPassword,
                  then: () => yup.string().required("Vui lòng xác nhận mật khẩu!"),
                  otherwise: () => yup.string().oneOf([yup.ref("newPassword")], "Mật khẩu không khớp!"),
               }),
            otherwise: () => yup.string().default(""),
         }),
      token: yup.string().default("").required("Vui lòng nhập mã xác nhận!"),
      recaptcha: yup.boolean().oneOf([true], "Vui lòng đồng ý để tiếp tục!").default(false).required(),
   })
   .required();

const deliveryTermsFormShema = yup
   .object()
   .shape({
      fullName: yup.string().default("").required("Vui lòng nhập họ tên!"),
      phoneNumber: yup
         .string()
         .default("")
         .required("Vui lòng nhập số điện thoại!")
         .matches(phoneNumberRegex, "Số điện thoại không hợp lệ!"),
      address: yup.string().default("").required("Vui lòng nhập địa chỉ!"),
      province: yup.string().default("").required("Vui lòng chọn tỉnh thành!"),
      district: yup
         .string()
         .default("")
         .test("is-province-selected", "Vui lòng chọn quận huyện!", function (value) {
            const { province } = this.parent;
            return province ? !!value : true;
         }),
      note: yup.string().default(""),
   })
   .required();

const paymentMethodFormSchema = yup
   .object()
   .shape({
      payment: yup.string().default("transfer").required(),
      bank: yup
         .string()
         .default("")
         .test("is-transfer", "Vui lòng chọn ngân hàng!", function (value) {
            const { payment } = this.parent;
            return payment === "transfer" ? !!value : true;
         }),
      invoice: yup.string().default(false),
      companyName: yup.string().default(""),
      taxCode: yup.string().default(""),
      companyAddress: yup.string().default(""),
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
   resetPasswordSchema,
   deliveryTermsFormShema,
   paymentMethodFormSchema,
};
