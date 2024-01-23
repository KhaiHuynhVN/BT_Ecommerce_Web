import PropTypes from "prop-types";
import classNames from "classnames/bind";

import NavChild2Item from "./components/NavChild2Item";

import styles from "./NavChild2.module.scss";

const cx = classNames.bind(styles);

function NavChild2({ data }) {
   return (
      <nav className={cx("wrapper", "p-[4.8px_32px_8px_16px]")} onClick={(e) => e.stopPropagation()}>
         <ul className={"flex flex-wrap gap-[1px]"}>
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
            {data.map((item, index) => (
               <li key={index} className={cx(`nav-item`)} onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
         </ul>
      </nav>
   );
}

NavChild2.propTypes = {
   data: PropTypes.array,
};

export default NavChild2;
