/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames/bind";
import { forwardRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import Input from "../../../../../../components/Input";
import Select from "../../../../../../components/Select";
import { schema } from "../../../../../../reactHookFormSchema";
import FinancialInvoiceForm from "./components/FinancialInvoiceForm";

import styles from "./PaymentMethodForm.module.scss";

const cx = classNames.bind(styles);

const selectData = [
   {
      value: "1",
      content: "Đỗ Thị Ánh Tuyết tại Ngân Hàng ACB - PGD Tam Hà - CN Thủ Đức",
      bankInfo: "Ngân Hàng ACB - PGD Tam Hà - CN Thủ Đức",
      owner: "Đỗ Thị Ánh Tuyết",
      accountNumber: "124039919",
   },
   {
      value: "2",
      content: "Công Ty TNHH Thế Giới Điện tại Ngân Hàng ACB - PGD Tam Hà - CN Thủ Đức",
      bankInfo: "Ngân Hàng ACB - PGD Tam Hà - CN Thủ Đức",
      owner: "Công Ty TNHH Thế Giới Điện",
      accountNumber: "124035209",
   },
];

const PaymentMethodForm = forwardRef(({ onSubmit }, ref) => {
   const [bankData, setBankData] = useState({});

   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      getValues,
      watch,
   } = useForm({
      resolver: yupResolver(schema.paymentMethodFormSchema),
      defaultValues: {
         payment: "transfer",
         invoice: false,
         bank: "",
         companyName: "",
         taxCode: "",
         companyAddress: "",
      },
   });

   useEffect(() => {
      if (!getValues("invoice")) {
         setValue("companyName", "");
         setValue("taxCode", "");
         setValue("companyAddress", "");
      }
   }, [getValues("invoice")]);

   useEffect(() => {
      if (getValues("payment") === "cash") {
         setValue("bank", "");
         setBankData({});
      }
   }, [getValues("payment")]);

   const handleChangeRadio = (value) => {
      setValue("payment", value, { shouldValidate: true });
   };

   const handleChangeCheckbox = () => {
      setValue("invoice", !watch("invoice"));
   };

   const handleChangeSelect = (e) => {
      const value = e.target.value;
      setValue("bank", value, { shouldValidate: Object.keys(errors).length ? true : false });

      const data = selectData.find((item) => item.value === value);
      setBankData(data || {});
   };

   const handleChangeInput = (value, key) => {
      setValue(key, value, { shouldValidate: Object.keys(errors).length ? true : false });
   };

   return (
      <form className={cx(`wrapper`, `flex gap-[1rem]`)} onSubmit={handleSubmit(onSubmit)}>
         <div className={`flex-1`}>
            <div>
               <Input
                  value="cash"
                  type="radio"
                  register={register("payment")}
                  wrapperCl={`cursor-pointer inline-block`}
                  labelCl={`cursor-pointer inline-flex`}
                  field={`Thanh toán tiền mặt ngay khi nhận hàng`}
                  inputWrapperCl={`order-[-1] mr-2 cursor-pointer`}
                  inputCl={`cursor-pointer`}
                  onChange={() => handleChangeRadio("cash")}
               />
            </div>
            <div className={`mt-2`}>
               <Input
                  value="transfer"
                  type="radio"
                  register={register("payment")}
                  wrapperCl={`cursor-pointer inline-block`}
                  labelCl={`cursor-pointer inline-flex`}
                  field={`Chuyển khoản trước qua ngân hàng`}
                  inputWrapperCl={`order-[-1] mr-2 cursor-pointer`}
                  inputCl={`cursor-pointer`}
                  onChange={() => handleChangeRadio("transfer")}
               />
               <div className={`flex items-center pl-[22px] text-twentieth-color`}>
                  <i className="bi bi-arrow-90deg-up"></i>
                  <span className={`block text-[14px]`}>Vui lòng ghi mã số đơn hàng vào nội dung thanh toán.</span>
               </div>
            </div>

            {getValues("payment") === "transfer" && (
               <div className={`mt-2`}>
                  <Select
                     value={watch("bank")}
                     placeholder={`-- Chọn Ngân Hàng --`}
                     data={selectData}
                     contentKey="content"
                     valueKey="value"
                     selectWrapperCl={`w-full flex`}
                     selectCl={`border border-solid border-black p-[10.5px] w-full`}
                     rightIcon={<span className="text-thirtieth-color flex items-center">*</span>}
                     onChange={handleChangeSelect}
                  />
                  {errors.bank && <span className={`text-forty-second-color mt-1 block`}>{errors.bank?.message}</span>}
               </div>
            )}

            {Object.keys(bankData).length > 0 && getValues("payment") === "transfer" && (
               <div className={`mt-2`}>
                  <div className={`flex`}>
                     <span className={`text-fifty-sixth-color mr-1 w-[120px]`}>Tên ngân hàng:</span>
                     <span>{bankData.bankInfo}</span>
                  </div>
                  <div className={`flex`}>
                     <span className={`text-fifty-sixth-color mr-1 w-[120px]`}>Chủ tài khoản:</span>
                     <span>{bankData.owner}</span>
                  </div>
                  <div className={`flex`}>
                     <span className={`text-fifty-sixth-color mr-1 w-[120px]`}>Số tài khoản:</span>
                     <span>{bankData.accountNumber}</span>
                  </div>
               </div>
            )}
         </div>

         <div className={cx(`invoice-wrapper`, `flex-1`)}>
            <Input
               checked={getValues("invoice")}
               type="checkbox"
               wrapperCl={`cursor-pointer inline-block`}
               labelCl={`cursor-pointer inline-flex`}
               field={`Xuất hóa đơn tài chính`}
               fieldCl={`relative top-[1px]`}
               inputWrapperCl={`order-[-1] mr-2 cursor-pointer`}
               inputCl={`cursor-pointer`}
               onChange={handleChangeCheckbox}
            />

            {getValues("invoice") && (
               <FinancialInvoiceForm
                  values={{
                     companyName: watch("companyName"),
                     taxCode: watch("taxCode"),
                     companyAddress: watch("companyAddress"),
                  }}
                  onChange={handleChangeInput}
               />
            )}
         </div>
         <button ref={ref} className={"hidden"}></button>
      </form>
   );
});

PaymentMethodForm.propTypes = {
   onSubmit: PropTypes.func,
};

export default PaymentMethodForm;
