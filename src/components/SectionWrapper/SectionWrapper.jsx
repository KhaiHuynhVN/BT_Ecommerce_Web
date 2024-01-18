import classNames from "classnames/bind";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "../Button";

import styles from "./SectionWrapper.module.scss";

const cx = classNames.bind(styles);

function SectionWrapper({ children, className, title, leftIcon, rightIcon, to, titlePrimary, button, btnTitle, btnLeftIcon }) {
   const TitleComp = to ? Link : "div";
   const classes = cx("wrapper", className);

   const titleClasses = cx("p-2 flex gap-2", { "hover:text-denary-color": to, "title-primary": titlePrimary });

   return (
      <div className={classes}>
         <div className="bg-tertiary-color text-[white] text-[19.2px] flex p-[1px] pb-0">
            <TitleComp className={titleClasses} to={to}>
               {leftIcon && <span>{leftIcon}</span>}
               {title}
               {rightIcon && <span>{rightIcon}</span>}
            </TitleComp>

            {button && (
               <Button className={`ml-auto items-center`} secondary noRounded leftIcon={btnLeftIcon}>
                  {btnTitle}
               </Button>
            )}
         </div>
         <div className="bg-tertiary-color p-[0_1px_1px_1px]">
            <div>{children}</div>
         </div>
      </div>
   );
}

SectionWrapper.propTypes = {
   children: Proptypes.node,
   className: Proptypes.string,
   title: Proptypes.string.isRequired,
   leftIcon: Proptypes.node,
   rightIcon: Proptypes.node,
   to: Proptypes.string,
   titlePrimary: Proptypes.bool,
   button: Proptypes.bool,
   btnTitle: Proptypes.string,
   btnLeftIcon: Proptypes.node,
};

export default SectionWrapper;
