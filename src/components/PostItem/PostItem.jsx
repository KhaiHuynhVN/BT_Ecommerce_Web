import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Image from "../Image";

import styles from "./PostItem.module.scss";

const cx = classNames.bind(styles);

function PostItem({ image }) {
   return (
      <div className={cx("wrapper")}>
         <Link className="block" to={"/"}>
            <Image className="w-full h-full" src={image} />
         </Link>
         <Link className="mt-2 block" to={"/"}>
            Hướng dẫn tìm sản phẩm tại thegioidien.com (P1)
         </Link>
      </div>
   );
}

PostItem.propTypes = {
   image: PropTypes.string.isRequired,
};

export default PostItem;
