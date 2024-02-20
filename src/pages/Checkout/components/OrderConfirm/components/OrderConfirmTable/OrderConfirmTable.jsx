import classNames from "classnames/bind";

import OrderConfirmTableItem from "./components/OrderConfirmTableItem";

import styles from "./OrderConfirmTable.module.scss";

const cx = classNames.bind(styles);

const OrderConfirmTable = () => {
   return (
      <div className={cx(`wrapper`)}>
         <div className={cx(`thead bg-fifty-eighth-color`)}>
            <div className={cx(`tr`, `flex`)}>
               <div className={cx(`th`, `text-forty-sixth-color p-[5px] text-center w-[50px] shrink-0`)}>STT</div>
               <div className={cx(`th`, `text-forty-sixth-color p-[5px] text-center w-[60px] shrink-0`)}>Hình</div>
               <div className={cx(`th`, `hide-990`, `text-forty-sixth-color p-[5px] text-center flex-[calc(1/2)]`)}>
                  Mã sản phẩm
               </div>
               <div
                  className={cx(
                     `th`,
                     `text-forty-sixth-color p-[5px] text-center flex-1 min-w-[90px] text-ellipsis text-nowrap overflow-hidden`,
                  )}
               >
                  Tên sản phẩm
               </div>
               <div className={cx(`th`, `hide-1400`, `text-forty-sixth-color p-[5px] text-center flex-[calc(1/2)]`)}>
                  Nhãn hiệu
               </div>
               <div className={cx(`th`, `hide-767`, `text-forty-sixth-color p-[5px] text-center w-[80px] shrink-0`)}>
                  Số lượng
               </div>
               <div className={cx(`th`, `hide-767`, `text-forty-sixth-color p-[5px] text-center w-[80px]`)}>ĐVT</div>
               <div className={cx(`th`, `hide-767`, `text-forty-sixth-color p-[5px] text-center w-[120px]`)}>Đơn giá</div>
               <div className={cx(`th`, `to-money`, `text-forty-sixth-color p-[5px] text-center w-[120px]`)}>Thành tiền</div>
            </div>
         </div>
         <div className={cx(`tbody bg-white`)}>
            <OrderConfirmTableItem />
            <OrderConfirmTableItem />
            <OrderConfirmTableItem />
            <div className={cx(`tr`, `flex`)}>
               <div className={`flex-1`}></div>
               <div className={cx(`text-forty-sixth-color p-[5px] text-start text-[17.6px] w-[150px]`)}>Tổng cộng:</div>
               <div className={cx(`td`, `p-[5px] text-end text-[17.6px] min-w-[136px]`)}>33.700</div>
            </div>
            <div className={cx(`tr`, `flex`)}>
               <div className={`flex-1`}></div>
               <div className={cx(`text-forty-sixth-color p-[5px] text-start text-[17.6px] w-[150px]`)}>Phí vận chuyển:</div>
               <div className={cx(`td`, `p-[5px] text-end text-[17.6px] min-w-[136px]`)}>19.100</div>
            </div>
            <div className={cx(`tr`, `flex`)}>
               <div className={`flex-1`}></div>
               <div className={cx(`text-forty-sixth-color p-[5px] text-start text-[17.6px] w-[150px]`)}>Tổng thanh toán:</div>
               <div className={cx(`td`, `p-[5px] text-end text-[17.6px] min-w-[136px]`)}>11.187.200</div>
            </div>
            <div className={cx(`tr`, `flex`)}>
               <div className={`flex-1`}></div>
               <div className={cx(`text-forty-sixth-color p-[5px] text-start text-[17.6px] w-[150px]`)}>Đồng tiền: </div>
               <div className={cx(`td`, `p-[5px] text-end text-[17.6px] min-w-[136px]`)}>VNĐ</div>
            </div>
         </div>
      </div>
   );
};

export default OrderConfirmTable;
