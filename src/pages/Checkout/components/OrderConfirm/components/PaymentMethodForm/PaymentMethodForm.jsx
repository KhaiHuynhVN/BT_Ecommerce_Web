import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { useState } from "react";

import Input from "../../../../../../components/Input";
import Select from "../../../../../../components/Select";
import { schema } from "../../../../../../reactHookFormSchema";

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

const PaymentMethodForm = () => {
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
      },
   });

   const onSubmitHandle = (data) => {
      console.log(data);
   };

   const handleChangeRadio = (value) => {
      setValue("payment", value);
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

   console.log(bankData);

   return (
      <form className={cx(`wrapper`, `flex`)} onSubmit={handleSubmit(onSubmitHandle)}>
         <div className={`flex-1`}>
            <div>
               <Input
                  name="payment"
                  checked={getValues("payment") === "cash"}
                  type="radio"
                  register={{ ...register("payment") }}
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
                  name="payment"
                  checked={getValues("payment") === "transfer"}
                  type="radio"
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

            {Object.keys(bankData).length > 0 && (
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

         <div className={`flex-1`}>
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
         </div>

         <button>Click me</button>
      </form>
   );
};

export default PaymentMethodForm;
