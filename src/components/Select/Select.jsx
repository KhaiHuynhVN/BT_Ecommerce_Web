import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./Select.module.scss";

const cx = classNames.bind(styles);

function Select({
   value,
   disabled,
   register = {},
   wrapperCl,
   selectCl,
   fieldCl,
   labelCl,
   field,
   placeholder,
   data = [],
   contentKey,
   valueKey,
   leftIcon,
   rightIcon,
   onChange = () => {},
   ...props
}) {
   const wrapperClasses = cx("wrapper", wrapperCl);
   const selectClasses = cx("select", selectCl, {
      disabled,
   });
   const fieldClasses = cx("field", fieldCl);
   const labelClasses = cx("label", labelCl);

   return (
      <div className={wrapperClasses}>
         <label className={labelClasses}>
            <div className={fieldClasses}>{field && <span>{field}</span>}</div>
            {leftIcon && <span>{leftIcon}</span>}
            <select {...register} {...props} value={value} className={selectClasses} onChange={(e) => onChange(e)}>
               <option value="">{placeholder}</option>
               {data.map((item, index) => (
                  <option key={index} value={valueKey ? item[valueKey] : item}>
                     {contentKey ? item[contentKey] : item}
                  </option>
               ))}
            </select>
            {rightIcon && <span>{rightIcon}</span>}
         </label>
      </div>
   );
}

Select.propTypes = {
   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   disabled: PropTypes.bool,
   register: PropTypes.object,
   wrapperCl: PropTypes.string,
   selectCl: PropTypes.string,
   fieldCl: PropTypes.string,
   labelCl: PropTypes.string,
   field: PropTypes.string,
   placeholder: PropTypes.string,
   data: PropTypes.array,
   contentKey: PropTypes.string,
   valueKey: PropTypes.string,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   onChange: PropTypes.func,
};

export default Select;
