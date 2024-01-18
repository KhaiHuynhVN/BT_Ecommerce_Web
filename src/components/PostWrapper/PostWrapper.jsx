import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./PostWrapper.module.scss";

const cx = classNames.bind(styles);

function PostWrapper({ children, title, leftIcon, rightIcon, className, gridCl }) {
   const classes = cx("wrapper", className);
   const gridClasses = gridCl;

   return (
      <div className={classes}>
         <Link to={"/"} className={cx("post-title", "text-[19.2px] text-white flex justify-center items-center p-2")}>
            {leftIcon && <span className="mr-2 flex justify-center items-center">{leftIcon}</span>}
            {title}
            {rightIcon && <span className="ml-2 flex justify-center items-center">{rightIcon}</span>}
         </Link>
         <div className={gridClasses}>{children}</div>
      </div>
   );
}

PostWrapper.propTypes = {
   children: PropTypes.node.isRequired,
   title: PropTypes.string.isRequired,
   className: PropTypes.string,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   gridCl: PropTypes.string,
};

export default PostWrapper;
