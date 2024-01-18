/* eslint-disable react-refresh/only-export-components */
import classNames from "classnames/bind";
import PropTypes from "prop-types";
// import { useState } from "react";

import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

function Input({
   value = "",
   checked,
   register = {},
   field,
   content,
   type = "text",
   placeholder = "",
   wrapperCl,
   labelCl,
   fieldCl,
   fieldLeftIcon,
   fieldRightIcon,
   inputWrapperCl,
   inputCl,
   inputLeftIcon,
   inputRightIcon,
   iconSpacing = "8px",
   textarea = false,
   textareaHeight,
   onChange = () => {},
   ...props
}) {
   const wrapperClasses = cx("wrapper", {
      [wrapperCl]: wrapperCl,
   });

   const fieldClasses = cx("field", {
      [fieldCl]: fieldCl,
   });

   const labelClasses = cx("label", {
      [labelCl]: labelCl,
   });

   const inputClasses = cx("input", {
      [inputCl]: inputCl,
   });

   const inputWrapperClasses = cx("input-wrapper", inputWrapperCl);

   const _props = {
      ...props,
   };

   const wrapperProps = {
      style: { "--iconSpacing": iconSpacing },
   };

   const InputComp = textarea ? "textarea" : "input";

   const handleChange = (e) => {
      onChange(e);
      if (!textarea) return;
      e.target.style.height = textareaHeight;
      e.target.style.height = e.target.scrollHeight + "px";
   };

   return (
      <div className={wrapperClasses} {...wrapperProps}>
         <label className={labelClasses}>
            {field && (
               <div className={fieldClasses}>
                  {fieldLeftIcon && <span>{fieldLeftIcon}</span>}
                  <span>{field}</span>
                  {fieldRightIcon && <span>{fieldRightIcon}</span>}
               </div>
            )}
            <div className={inputWrapperClasses}>
               {inputLeftIcon && <span>{inputLeftIcon}</span>}
               <InputComp
                  value={value}
                  className={inputClasses}
                  type={type}
                  checked={checked}
                  placeholder={placeholder}
                  {...register}
                  onChange={(e) => handleChange(e)}
                  {..._props}
               />
               {inputRightIcon && <span>{inputRightIcon}</span>}
               {content && <span>{content}</span>}
            </div>
         </label>
      </div>
   );
}

Input.propTypes = {
   value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
   checked: PropTypes.bool,
   register: PropTypes.object,
   field: PropTypes.string,
   content: PropTypes.string,
   type: PropTypes.string,
   placeholder: PropTypes.string,
   wrapperCl: PropTypes.string,
   labelCl: PropTypes.string,
   fieldCl: PropTypes.string,
   onChange: PropTypes.func,
   fieldLeftIcon: PropTypes.element,
   fieldRightIcon: PropTypes.element,
   inputWrapperCl: PropTypes.string,
   inputCl: PropTypes.string,
   inputLeftIcon: PropTypes.element,
   inputRightIcon: PropTypes.element,
   iconSpacing: PropTypes.string,
   textarea: PropTypes.bool,
   textareaHeight: PropTypes.string,
};

export default Input;
