import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import NavChild1 from "../NavChild1";
import productNavSlice, { productNavSelector } from "../../productNavSlice";

import styles from "./ProductNavItem.module.scss";

const cx = classNames.bind(styles);

function ProductNavItem({ id, data }) {
   const dispatch = useDispatch();

   const navChild1 = useSelector(productNavSelector.navChild1);

   const handleShowItems = () => {
      dispatch(productNavSlice.actions.setNavChild1(id));
   };

   return (
      <div
         className={cx("nav-item", "flex flex-col transition-all duration-[0.2s] hover:bg-sixteenth-color cursor-pointer", {
            "bg-fifteenth-color": !navChild1.includes(id),
            "bg-sixteenth-color": navChild1.includes(id),
         })}
         onClick={handleShowItems}
      >
         <div className="flex items-center justify-between p-[0_11.2px]">
            <div className="flex items-center text-[17.6px]">
               <i className="bi bi-play-fill mr-2 text-[1.33333em] font-[900]"></i>
               <Link className="p-[11.2px] hover:bg-eleventh-color transition-all duration-[0.2s]" to={"/"}>
                  {data.title}
               </Link>
            </div>
            {navChild1.includes(id) ? (
               <i className="bi bi-chevron-up text-[17.6px] font-[400]"></i>
            ) : (
               <i className="bi bi-plus-lg text-[17.6px] font-[400]"></i>
            )}
         </div>

         {navChild1.includes(id) && <NavChild1 data={data.children} />}
      </div>
   );
}

ProductNavItem.propTypes = {
   id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
   data: PropTypes.object,
};

export default ProductNavItem;
