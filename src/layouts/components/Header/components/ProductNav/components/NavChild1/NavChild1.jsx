import classNames from "classnames/bind";
import PropTypes from "prop-types";

import NavChild1Item from "./components/NavChild1Item";

import styles from "./NavChild1.module.scss";

const cx = classNames.bind(styles);

function NavChild1({ data }) {
   return (
      <nav className={cx("wrapper", `bg-white`)}>
         <ul className={cx("test")}>
            {data.map((item, index) => (
               <li
                  key={index}
                  className={cx("nav-item", "bg-seventeenth-color p-[0_11.2px] pr-0 pl-4 text-[17.6px]")}
                  onClick={(e) => e.stopPropagation()}
               >
                  <NavChild1Item id={item.id} data={item} />
               </li>
            ))}
         </ul>
      </nav>
   );
}

NavChild1.propTypes = {
   data: PropTypes.array,
};

export default NavChild1;
