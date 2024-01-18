import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

import Input from "../Input";

import styles from "./RadioSectionWrapper.module.scss";

const cx = classNames.bind(styles);

function RadioSectionWrapper({ children, className, leftIcon, rightIcon, title, name, checked, onChange = () => {} }) {
   const classes = cx("wrapper", className);

   const contentRef = useRef();
   const childrenRef = useRef();

   useEffect(() => {
      if (checked) {
         contentRef.current.style.height = `${childrenRef.current.scrollHeight}px`;
         contentRef.current.style.minHeight = `${childrenRef.current.scrollHeight}px`;
         contentRef.current.style.opacity = "1";
      } else {
         contentRef.current.style = "";
      }
   });

   const handleTransitionEnd = () => {
      if (checked) {
         contentRef.current.style.height = "auto";
      }
   };

   return (
      <div className={classes}>
         <label className={cx("label", `bg-fifty-first-color text-twenty-sixth-color block text-[19.2px] p-[1px] pb-0`)}>
            <div className={`p-[11.2px_10px] flex gap-2 items-center`}>
               <Input wrapperCl={cx("input")} type="radio" name={name} checked={checked} onChange={onChange} />
               {leftIcon && <span>{leftIcon}</span>}
               {title}
               {rightIcon && <span>{rightIcon}</span>}
               <span className={cx("icon")}>
                  <i className="bi bi-chevron-right text-septenary-color text-[1.5rem] font-bold"></i>
               </span>
            </div>
         </label>
         <div
            ref={contentRef}
            className={`overflow-hidden h-0 min-h-0 opacity-[0.9] transition-all duration-[0.3s] flex flex-col justify-end`}
            onTransitionEnd={handleTransitionEnd}
         >
            <div className="bg-fifty-first-color p-[1px]">
               <div ref={childrenRef}>{children}</div>
            </div>
         </div>
      </div>
   );
}

RadioSectionWrapper.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
   title: PropTypes.string.isRequired,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   name: PropTypes.string,
   checked: PropTypes.bool,
   onChange: PropTypes.func,
};

export default RadioSectionWrapper;
