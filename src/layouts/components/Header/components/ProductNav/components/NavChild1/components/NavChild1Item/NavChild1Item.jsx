import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import NavChild2 from "../../../NavChild2";
import productNavSlice, { productNavSelector } from "../../../../productNavSlice";

import styles from "./NavChild1Item.module.scss";

const cx = classNames.bind(styles);

function NavChild1Item({ id, data }) {
   const dispatch = useDispatch();

   const navChild2 = useSelector(productNavSelector.navChild2);

   const handleShowItems = () => {
      dispatch(productNavSlice.actions.setNavChild2(id));
   };

   return (
      <div className={cx("wrapper")} onClick={handleShowItems}>
         <div className={cx("nav-item-top", "flex items-center justify-between p-[0_11.2px]")}>
            <div className="flex items-center">
               <i className="bi bi-chevron-right text-[17.6px] font-[400]"></i>
               <Link className="p-[11.2px] hover:bg-eleventh-color transition-all duration-[0.2s]" to={"/"}>
                  {data.title}
               </Link>
            </div>
            {navChild2.includes(id) ? (
               <i className="bi bi-chevron-up text-[17.6px] font-[400]"></i>
            ) : (
               <i className="bi bi-plus-lg text-[17.6px] font-[400]"></i>
            )}
         </div>

         {navChild2.includes(id) && <NavChild2 data={data.children} />}
      </div>
   );
}

NavChild1Item.propTypes = {
   id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
   data: PropTypes.object,
};

export default NavChild1Item;
