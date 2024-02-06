import classNames from "classnames/bind";

import Image from "../../../../../../../../components/Image";

import styles from "./CheckoutTableItem.module.scss";

const cx = classNames.bind(styles);

function CheckoutTableItem() {
   return (
      <div className={cx(`tr`, `flex`)}>
         <div className={cx(`th`, `p-[5px] flex items-center justify-center text-center w-[40px]`)}>1</div>
         <div className={cx(`th`, `p-[5px] flex items-center justify-center text-center w-[60px]`)}>
            <Image src="https://thegioidien.com/hmhB/S56SO532GY300034384.jpg" />
         </div>
         <div className={cx(`th`, `p-[5px] flex items-center text-center flex-1 min-w-[60px]`)}>Ổ cắm 5P 32A 500V IP66</div>
         <div className={cx(`th`, `p-[5px] w-[190px]`)}>
            <div className={`flex justify-between`}>
               <div className={`flex`}>
                  <span className={`text-twentieth-color mr-1`}>ĐVT:</span>
                  <span>Cái</span>
               </div>
               <div className={`flex`}>
                  <span className={`text-fifty-fourth-color mr-1`}>x</span>
                  <span>1</span>
               </div>
            </div>
            <div className={`flex justify-between`}>
               <div className={`flex`}>
                  <span className={`text-twentieth-color mr-1`}>Đơn giá:</span>
               </div>
               <div className={`flex`}>
                  <span>2.654.300</span>
               </div>
            </div>
            <div className={`flex justify-end`}>
               <span className={`text-fifty-fourth-color mr-1`}>=</span>
               <span>2.654.300</span>
            </div>
         </div>
      </div>
   );
}

export default CheckoutTableItem;
