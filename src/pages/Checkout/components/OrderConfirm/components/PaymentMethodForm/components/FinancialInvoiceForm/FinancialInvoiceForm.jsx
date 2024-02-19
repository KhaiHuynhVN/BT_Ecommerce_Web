import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Input from "../../../../../../../../components/Input";

import styles from "./FinancialInvoiceForm.module.scss";

const cx = classNames.bind(styles);

const FinancialInvoiceForm = ({ values, onChange }) => {
   return (
      <div className={cx(`wrapper`)}>
         <Input
            value={values.companyName}
            wrapperCl={`mt-2`}
            field={`Tên công ty`}
            fieldCl={`w-[96px]`}
            inputWrapperCl={`flex-1`}
            inputCl={`border border-solid border-transparent outline outline-[1px] outline-black
            focus:border-black p-2 w-full`}
            onChange={(e) => onChange(e.target.value, "companyName")}
         />
         <Input
            value={values.taxCode}
            wrapperCl={`mt-4`}
            field={`Mã số thuế`}
            fieldCl={`w-[96px]`}
            inputWrapperCl={`flex-1`}
            inputCl={`border border-solid border-transparent outline outline-[1px] outline-black
            focus:border-black p-2 w-full`}
            onChange={(e) => onChange(e.target.value, "taxCode")}
         />
         <Input
            value={values.companyAddress}
            wrapperCl={`mt-4`}
            field={`Địa chỉ`}
            fieldCl={`w-[96px]`}
            inputWrapperCl={`flex-1`}
            inputCl={`border border-solid border-transparent outline outline-[1px] outline-black
            focus:border-black p-2 w-full`}
            onChange={(e) => onChange(e.target.value, "companyAddress")}
         />
      </div>
   );
};

FinancialInvoiceForm.propTypes = {
   values: PropTypes.object,
   onChange: PropTypes.func,
};

export default FinancialInvoiceForm;
