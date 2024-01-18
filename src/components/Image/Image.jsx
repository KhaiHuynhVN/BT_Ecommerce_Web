import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { forwardRef, memo } from "react";
import { images } from "../../assets";

import styles from "./Image.module.scss";

const cx = classNames.bind(styles);

const Component = ({ src = images.defaultImage, className, alt = "Mobile-Legends_image", ...props }, ref) => {
   const classes = cx("wrapper", className);

   return (
      <img className={classes} ref={ref} alt={alt} {...props} src={src} onError={(e) => (e.target.src = images.defaultImage)} />
   );
};

const Image = memo(forwardRef(Component));

Component.propTypes = {
   src: PropTypes.string,
   className: PropTypes.string,
   alt: PropTypes.string,
};

export default Image;
