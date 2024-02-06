import classNames from "classnames/bind";

import CheckoutTableItem from "./components/CheckoutTableItem";

import styles from "./CheckoutTable.module.scss";

const cx = classNames.bind(styles);

function CheckoutTable() {
   return (
      <div className={cx("wrapper")}>
         <div className={cx(`thead`)}>
            <div className={cx(`tr`, `flex bg-fifty-third-color text-forty-fifth-color text-[16px]`)}>
               <div className={cx(`th`, `text-center w-[40px]`)}>STT</div>
               <div className={cx(`th`, `text-center w-[60px]`)}>Hình</div>
               <div className={cx(`th`, `text-center flex-1 min-w-[60px]`)}>Tên sản phẩm</div>
               <div className={cx(`th`, `text-center w-[190px]`)}>Thành tiền</div>
            </div>
         </div>
         <div className={cx(`tbody`)}>
            <CheckoutTableItem />
            <CheckoutTableItem />
            <CheckoutTableItem />
            <div className={cx(`tr`, `flex py-2`)}>
               <div className={cx(`text-center w-[40px]`)}></div>
               <div className={cx(`text-center w-[60px]`)}></div>
               <div className={cx(`text-end text-[17.6px] flex-1 min-w-[60px] text-thirty-second-color mr-4`)}>Tạm tính:</div>
               <div className={cx(`th`, `text-end text-[17.6px] w-[190px] mr-[5px]`)}>2.654.300</div>
            </div>
         </div>
      </div>
   );
}

export default CheckoutTable;
