import classNames from "classnames/bind";

import Image from "../../../../../../components/Image";

import styles from "./OrderConfirmTableItem.module.scss";

const cx = classNames.bind(styles);

const OrderConfirmTableItem = () => {
   return (
      <div className={cx(`tr`, `flex`)}>
         <div className={cx(`td`, `p-[5px] w-[50px] shrink-0 flex justify-center items-center`)}>1</div>
         <div className={cx(`td`, `p-[5px] text-center w-[60px] shrink-0`)}>
            <Image src="https://thegioidien.com/hmhB/b%E1%BB%99%204%20c%C3%B4ng%20t%E1%BA%AFc725253557.jpg" />
         </div>
         <div className={cx(`td`, `p-[5px] flex-[calc(1/2)] flex items-center`)}>A8401S_WE_G19</div>
         <div className={cx(`td`, `p-[5px] flex-1 min-w-[90px] flex items-center`)}>Mặt cho 1 thiết bị size 1M màu trắng</div>
         <div className={cx(`td`, `p-[5px] flex-[calc(1/2)] flex items-center justify-center`)}>Clipsal/Schneider</div>
         <div className={cx(`td`, `p-[5px] w-[80px] shrink-0 flex items-center justify-center`)}>1</div>
         <div className={cx(`td`, `p-[5px] text-center w-[80px] flex items-center justify-center`)}>Cái</div>
         <div className={cx(`td`, `p-[5px] w-[120px] flex items-center justify-end`)}>33.700</div>
         <div className={cx(`td`, `p-[5px] w-[120px] flex items-center justify-end`)}>33.700</div>
      </div>
   );
};

export default OrderConfirmTableItem;
