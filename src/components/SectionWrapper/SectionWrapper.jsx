import classNames from "classnames/bind";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "../Button";

import styles from "./SectionWrapper.module.scss";

const cx = classNames.bind(styles);

function SectionWrapper({
   children,
   className,
   title,
   leftIcon,
   rightIcon,
   to,
   titlePrimary,
   titleSecondary,
   button,
   btnTitle,
   btnLeftIcon,
   btnTo,
   isSignIned,
}) {
   const TitleComp = to ? Link : "div";
   const classes = cx("wrapper", className);

   const titleClasses = cx("p-2 flex gap-2", {
      "hover:text-denary-color": to,
      "title-primary": titlePrimary,
      "title-secondary": titleSecondary,
   });

   return (
      <div className={classes}>
         <div className={cx("title-wrapper", "bg-tertiary-color text-[white] text-[19.2px] flex p-[1px]")}>
            <TitleComp className={titleClasses} to={to}>
               {leftIcon && <span>{leftIcon}</span>}
               {title}
               {rightIcon && <span>{rightIcon}</span>}
            </TitleComp>

            {button && (
               <div className={`bg-nonary-color ml-auto`}>
                  <div className={cx("btn-container", "flex gap-[1px] h-full")}>
                     {isSignIned && (
                        <>
                           <Button
                              className={cx("btn-item", `items-center text-[16px]`)}
                              secondary
                              noRounded
                              leftIcon={<i className="bi bi-printer text-octonary-color"></i>}
                              to={btnTo}
                           >
                              In
                           </Button>
                           <Button
                              className={cx("btn-item", `items-center text-[16px]`)}
                              secondary
                              noRounded
                              leftIcon={<i className="bi bi-file-earmark-excel text-octonary-color"></i>}
                              to={btnTo}
                           >
                              Xuất Excel
                           </Button>
                        </>
                     )}
                     <Button
                        className={cx("btn-item", `items-center text-[16px]`)}
                        secondary
                        noRounded
                        leftIcon={btnLeftIcon}
                        to={btnTo}
                     >
                        {btnTitle}
                     </Button>
                  </div>
               </div>
            )}
         </div>
         <div className={cx("children-wrapper", "bg-tertiary-color p-[0_1px_1px_1px]")}>
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
   titleSecondary: Proptypes.bool,
   button: Proptypes.bool,
   btnTitle: Proptypes.string,
   btnLeftIcon: Proptypes.node,
   btnTo: Proptypes.string,
   isSignIned: Proptypes.bool,
};

export default SectionWrapper;
