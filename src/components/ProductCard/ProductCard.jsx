import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import Proptypes from "prop-types";

import Image from "../Image";

import styles from "./ProductCard.module.scss";

const cx = classNames.bind(styles);

function ProductCard({ to }) {
   return (
      <div className={cx("product-card", "flex flex-col items-center relative text-[16px] h-full")}>
         <div
            className={cx(
               "product-card-stick",
               "absolute flex justify-center items-center top-0 right-0 w-[42px] h-[42px] text-denary-color",
            )}
         >
            -30%
         </div>
         <Link to={to}>
            <Image src="https://thegioidien.com/hmhB/A6NRD666664143.jpg" alt="product-card-image" />
         </Link>
         <Link className="mt-2 block w-full text-center font-[600] px-2 overflow-hidden text-ellipsis text-nowrap" to={to}>
            A6NRD
         </Link>
         <Link className="p-2" to={to}>
            Bộ điều chỉnh độ sáng đèn 1200W
         </Link>
         <div className="flex items-center justify-center w-full mt-auto">
            <span className="line-through mr-[4.8px] text-[19.2px] text-nineteenth-color">467.500</span>
            <sup className="text-twentieth-color text-[13.33333px]">đ</sup>
         </div>
         <div className={cx("product-card__curr-price", "flex items-center justify-center w-full p-2")}>
            <span className="mr-[4.8px] text-[20.8px] text-nineteenth-color">467.500</span>
            <sup className="text-twentieth-color text-[13.33333px]">đ</sup>
         </div>
      </div>
   );
}

ProductCard.propTypes = {
   to: Proptypes.string,
};

export default ProductCard;
