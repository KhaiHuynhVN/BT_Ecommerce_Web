import classNames from "classnames/bind";

import Image from "../../../../../../../../components/Image";

import styles from "./OrderConfirmTableItem.module.scss";

const cx = classNames.bind(styles);

const OrderConfirmTableItem = () => {
   return (
      <div className={cx(`wrapper`, `tr`, `flex`)}>
         <div className={cx(`td`, `p-[5px] w-[50px] shrink-0 flex justify-center items-center`)}>1</div>
         <div className={cx(`td`, `p-[5px] text-center w-[60px] shrink-0`)}>
            <Image src="https://thegioidien.com/hmhB/b%E1%BB%99%204%20c%C3%B4ng%20t%E1%BA%AFc725253557.jpg" />
         </div>
         <div className={cx(`td`, `hide-990`, `p-[5px] flex-[calc(1/2)] flex items-center`)}>A8401S_WE_G19</div>
         <div className={cx(`td`, `p-[5px] flex-1 min-w-[90px] flex items-center`)}>Mặt cho 1 thiết bị size 1M màu trắng</div>
         <div className={cx(`td`, `hide-1400`, `p-[5px] flex-[calc(1/2)] flex items-center justify-center`)}>
            Clipsal/Schneider
         </div>
         <div className={cx(`td`, `hide-767`, `p-[5px] w-[80px] shrink-0 flex items-center justify-center`)}>1</div>
         <div className={cx(`td`, `hide-767`, `p-[5px] text-center w-[80px] flex items-center justify-center`)}>Cái</div>
         <div className={cx(`td`, `hide-767`, `p-[5px] w-[120px] flex items-center justify-end`)}>33.700</div>
         <div className={cx(`td`, `to-money`, `p-[5px] w-[120px] flex items-center justify-end`)}>
            <span className={cx(`hide-767`, `block`)}>33.700</span>
            <div className={cx("show-767", `hidden w-full`)}>
               <div className={`flex items-center justify-between`}>
                  <div className={`flex flex-1 shrink-0`}>
                     <span className={`text-twentieth-color mr-1`}>ĐVT:</span>
                     <span>Cái</span>
                  </div>
                  <div className={`flex items-center flex-1 shrink-0`}>
                     <span className={`text-fifty-fourth-color block ml-auto mr-2`}>x</span>
                     <span>12</span>
                  </div>
               </div>
               <div className={`flex justify-between mt-1`}>
                  <div className={`flex`}>
                     <span className={`text-twentieth-color mr-1`}>Đơn giá:</span>
                  </div>
                  <div className={`flex`}>
                     <span>2.654.300</span>
                  </div>
               </div>
               <div className={`flex justify-end mt-1`}>
                  <span className={`text-fifty-fourth-color mr-1`}>=</span>
                  <span>2.654.300</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OrderConfirmTableItem;
