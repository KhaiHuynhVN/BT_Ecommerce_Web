import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./CartTable.module.scss";
import CartTableItem from "../CartTableItem/CartTableItem";

const cx = classNames.bind(styles);

const data = [
   {
      id: 1,
      name: "Bộ 4 công tắc B, 1 chiều, 16A 250VAC",
      quantity: 1,
   },
   {
      id: 2,
      name: "Bộ 4 công tắc B, 1 chiều, 16A 250VAC",
      quantity: 3,
   },
];

function CartTable() {
   const [itemId, setItemId] = useState(null);

   const handleClickTableItem = (id) => {
      setItemId(id);
   };

   return (
      <div className={cx("wrapper")}>
         <div className={cx("thead")}>
            <div className={cx("tr", `flex`)}>
               <div className={cx("th", `text-forty-sixth-color p-[5px] text-center w-[50px]`)}>STT</div>
               <div className={cx("th", `text-forty-sixth-color p-[5px] text-center w-[60px]`)}>Hình</div>
               <div className={cx("th", `text-forty-sixth-color p-[5px] text-center flex-[calc(1/2)]`)}>Mã sản phẩm</div>
               <div className={cx("th", `text-forty-sixth-color p-[5px] text-center flex-1 min-w-[90px]`)}>Tên sản phẩm</div>
               <div className={cx("th", `text-forty-sixth-color p-[5px] text-center flex-[calc(1/2)]`)}>Nhãn hiệu</div>
               <div className={cx("th", `text-forty-sixth-color p-[5px] text-center w-[80px]`)}>Số lượng</div>
               <div className={cx("th", `text-forty-sixth-color p-[5px] text-center w-[80px]`)}>ĐVT</div>
               <div className={cx("th", `text-forty-sixth-color p-[5px] text-center w-[120px]`)}>Đơn giá</div>
               <div className={cx("th", `text-forty-sixth-color p-[5px] text-center w-[120px]`)}>Thành tiền</div>
               <div className={cx("th", `text-forty-sixth-color p-[5px] text-center w-[200px]`)}>Hành động</div>
            </div>
         </div>
         <div className={cx("tbody")}>
            {data.map((item, index) => (
               <CartTableItem
                  key={index}
                  data={item}
                  id={item.id}
                  itemId={itemId}
                  onClick={handleClickTableItem}
                  indx={index + 1}
               />
            ))}

            <div className={cx("tr", `flex`)}>
               <div className={cx(`text-forty-sixth-color p-[5px] text-center w-[50px]`)}></div>
               <div className={cx(`text-forty-sixth-color p-[5px] text-center w-[60px]`)}></div>
               <div className={cx(`text-forty-sixth-color p-[5px] text-center flex-[calc(1/2)]`)}></div>
               <div className={cx(`text-forty-sixth-color p-[5px] text-center flex-1 min-w-[90px]`)}></div>
               <div className={cx(`text-forty-sixth-color p-[5px] text-center flex-[calc(1/2)]`)}></div>
               <div className={cx(`text-forty-sixth-color p-[5px] text-center w-[80px]`)}></div>
               <div className={cx(`text-forty-sixth-color p-[5px] text-center w-[80px]`)}></div>
               <div className={cx(`text-thirty-second-color p-[5px] text-center w-[120px] text-[17.6px]`)}>Tạm tính:</div>
               <div className={cx(`text-forty-sixth-color p-[5px] text-center w-[120px]`)}>242.800</div>
               <div className={cx("td", `text-forty-sixth-color p-[5px] text-center w-[200px]`)}></div>
            </div>
         </div>
      </div>
   );
}

export default CartTable;
