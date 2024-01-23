/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import { memo } from "react";

const cx = classNames.bind(styles);

function Button({
   to,
   href,
   disabled,
   primary,
   secondary,
   tertiary,
   quaternary,
   quinary,
   senary,
   septenary,
   text,
   noRounded,
   spacing = "12px",
   iconSpacing = "8px",
   leftIcon,
   fallbackLeftIcon,
   rightIcon,
   fallbackRightIcon,
   className,
   children,
   onClick,
   ...props
}) {
   let Comp = "button";

   const classes = cx("wrapper", {
      disabled,
      primary,
      secondary,
      tertiary,
      quaternary,
      quinary,
      senary,
      septenary,
      text,
      ["no-rounded"]: noRounded,
      [className]: className,
   });

   const _props = {
      onClick,
      style: { "--spacing": spacing, "--iconSpacing": iconSpacing },
      ...props,
   };

   if (disabled) {
      Object.keys(_props).forEach((key) => {
         key.startsWith("on") && typeof _props[key] === "function" && delete _props[key];
      });
   }

   if (to) {
      _props.to = to;
      Comp = Link;
   }
   if (href) {
      _props.href = href;
      Comp = "a";
   }

   return (
      <Comp className={classes} {..._props}>
         {leftIcon && <span className={cx("left-icon", `flex`)}>{leftIcon}</span>}
         {fallbackLeftIcon && <span className={cx("fallback-left-icon")}>{fallbackLeftIcon}</span>}
         <span className={cx("children")}>{children}</span>
         {rightIcon && <span className={cx("right-icon", `flex`)}>{rightIcon}</span>}
         {fallbackRightIcon && <span className={cx("fallback-right-icon")}>{fallbackRightIcon}</span>}
      </Comp>
   );
}

Button.propTypes = {
   to: PropTypes.string,
   href: PropTypes.string,
   className: PropTypes.string,
   disabled: PropTypes.bool,
   primary: PropTypes.bool,
   secondary: PropTypes.bool,
   tertiary: PropTypes.bool,
   quaternary: PropTypes.bool,
   quinary: PropTypes.bool,
   senary: PropTypes.bool,
   septenary: PropTypes.bool,
   text: PropTypes.bool,
   noRounded: PropTypes.bool,
   spacing: PropTypes.string,
   iconSpacing: PropTypes.string,
   leftIcon: PropTypes.node,
   fallbackLeftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   fallbackRightIcon: PropTypes.node,
   children: PropTypes.node.isRequired,
   onClick: PropTypes.func,
};

export default memo(Button);
