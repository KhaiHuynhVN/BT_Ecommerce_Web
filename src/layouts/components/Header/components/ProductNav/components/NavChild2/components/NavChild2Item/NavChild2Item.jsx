import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./NavChild2Item.module.scss";

const cx = classNames.bind(styles);

function NavChild2Item({ data }) {
   return (
      <Link
         className={cx("text-[16px] bg-white hover:bg-eighteenth-color text-black p-[11.2px_16px] block rounded-[3px]")}
         to={"/"}
      >
         <i className="bi bi-lightning mr-2 text-tertiary-color"></i>
         {data.title}
      </Link>
   );
}

NavChild2Item.propTypes = {
   data: PropTypes.object,
};

export default NavChild2Item;
