import classNames from "classnames/bind";

import ProductCard from "../ProductCard";

import styles from "./ProductContainer.module.scss";

const cx = classNames.bind(styles);

function ProductContainer() {
   return (
      <div className={cx("wrapper", "grid grid-cols-12 gap-[1rem] bg-white p-4")}>
         <div className={cx("product-item", "col-span-2")}>
            <ProductCard to={"/san-pham/1"} />
         </div>
         <div className={cx("product-item", "col-span-2")}>
            <ProductCard to={"/san-pham/1"} />
         </div>
         <div className={cx("product-item", "col-span-2")}>
            <ProductCard to={"/san-pham/1"} />
         </div>
         <div className={cx("product-item", "col-span-2")}>
            <ProductCard to={"/san-pham/1"} />
         </div>
         <div className={cx("product-item", "col-span-2")}>
            <ProductCard to={"/san-pham/1"} />
         </div>
         <div className={cx("product-item", "col-span-2")}>
            <ProductCard to={"/san-pham/1"} />
         </div>
         <div className={cx("product-item", "col-span-2")}>
            <ProductCard to={"/san-pham/1"} />
         </div>
      </div>
   );
}

export default ProductContainer;
