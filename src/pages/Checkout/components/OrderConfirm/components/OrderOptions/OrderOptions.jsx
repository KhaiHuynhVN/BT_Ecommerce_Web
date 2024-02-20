import { useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Input from "../../../../../../components/Input";
import Button from "../../../../../../components/Button";

import styles from "./OrderOptions.module.scss";

const cx = classNames.bind(styles);

const OrderOptions = ({ onClick }) => {
   const [option, setOption] = useState("accept");

   const handleChangeRadio = (value) => {
      setOption(value);
   };

   return (
      <div className={cx("wrapper", `min-w-[390px]`)}>
         <div className={`p-2 pb-4`}>
            <p>
               Quý khách vui lòng giữ liên lạc qua điện thoại di động sau khi đặt hàng để nhân viên phụ trách liên hệ xử lý đơn
               hàng.
            </p>
            <p className={`mt-2`}>
               Do tính chất sản phẩm công nghiệp và dữ liệu trực tuyến nên có thể có sai số về lưu kho tại thời điểm đặt hàng.
            </p>
            <p className={`mt-2`}>
               Mọi thắc mắc trong quá trình đặt hàng trực tuyến vui lòng liên hệ đường dây nóng chăm sóc khách hàng:
               <span className={`font-bold text-sixty-first-color ml-1`}>0967 266 277</span>
            </p>
         </div>
         <div className={`mt-4 p-4`}>
            <fieldset className={`py-2 px-4 border border-quaternary-color border-solid`}>
               <legend>Tùy chọn đơn hàng</legend>
               <div className={cx(`options-wrapper`, `flex items-center`)}>
                  <div>
                     <div className={`mt-[6px]`}>
                        <Input
                           value="accept"
                           type="radio"
                           name="option"
                           checked={option === "accept"}
                           wrapperCl={`cursor-pointer inline-block`}
                           labelCl={`cursor-pointer inline-flex`}
                           field={`Tôi đồng ý đặt mua các sản phẩm trong đơn hàng này cùng các điều khoản như trên.`}
                           inputWrapperCl={`order-[-1] mr-2 cursor-pointer`}
                           inputCl={`cursor-pointer`}
                           onChange={(e) => handleChangeRadio(e.target.value)}
                        />
                     </div>
                     <div className={`mt-2`}>
                        <Input
                           value="request"
                           type="radio"
                           name="option"
                           checked={option === "request"}
                           wrapperCl={`cursor-pointer inline-block`}
                           labelCl={`cursor-pointer inline-flex`}
                           field={`Tôi yêu cầu thegioidien.com báo giá dự án cho các sản phẩm trong đơn hàng này.`}
                           inputWrapperCl={`order-[-1] mr-2 cursor-pointer`}
                           inputCl={`cursor-pointer`}
                           onChange={(e) => handleChangeRadio(e.target.value)}
                        />
                        <div className={`flex items-center pl-[22px] text-twentieth-color`}>
                           <i className="bi bi-arrow-90deg-up"></i>
                           <span className={`block text-[14px]`}>
                              Chỉ yêu cầu báo giá dự án cho đơn hàng số lượng lớn hoặc giá trị lớn
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className={`py-4 px-8`}>
                     {option === "request" ? (
                        <Button
                           className={`text-[17.6px]`}
                           primary
                           leftIcon={<i className="bi bi-chevron-right text-denary-color"></i>}
                           onClick={onClick}
                        >
                           Gửi yêu cầu báo giá dự án
                        </Button>
                     ) : (
                        <Button
                           className={`text-[17.6px]`}
                           primary
                           leftIcon={<i className="bi bi-chevron-right text-denary-color"></i>}
                           onClick={onClick}
                        >
                           Xác nhận đặt hàng
                        </Button>
                     )}
                  </div>
               </div>
            </fieldset>
         </div>
      </div>
   );
};

OrderOptions.propTypes = {
   onClick: PropTypes.func,
};

export default OrderOptions;
