import classNames from "classnames/bind";
import { useState } from "react";
import PropTypes from "prop-types";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Image from "../../../../components/Image";

import styles from "./CartTableItem.module.scss";

const cx = classNames.bind(styles);

function CartTableItem({ data, id, onClick = () => {}, itemId, indx }) {
   const [isEdit, setIsEdit] = useState(false);
   const [quantityValue, setQuantityValue] = useState(data.quantity);
   const [quantity, setQuantity] = useState(data.quantity);

   const classes = cx("wrapper", "tr", `flex`, {
      "bg-forty-ninth-color": isEdit && id === itemId,
   });

   const handleEdit = (id) => {
      setIsEdit(true);
      onClick(id);
   };

   const handleSave = () => {
      setIsEdit(false);
      setQuantity(quantityValue);
   };

   const handleCancelEdit = () => {
      setIsEdit(false);
      setQuantityValue(quantity);
   };

   const handleChangeQuantity = (e) => {
      const value = e.target.value;
      const replaceValue = value.replace(/^0+/, "");
      const newValue = Math.floor(+replaceValue);
      +value < 1 ? setQuantityValue(1) : setQuantityValue(String(newValue));
   };

   return (
      <div className={classes}>
         <div className={cx("td", `p-[10px_5px] flex items-center justify-center w-[50px] shrink-0`)}>{indx}</div>
         <div className={cx("td", `p-[10px_5px] flex items-center justify-center w-[60px] shrink-0`)}>
            <Image src="https://thegioidien.com/hmhB/b%E1%BB%99%204%20c%C3%B4ng%20t%E1%BA%AFc725253557.jpg" />
         </div>
         <div className={cx("td", "hide-992", `p-[10px_5px] flex items-center flex-[calc(1/2)]`)}>WMT507MYH-VN</div>
         <div className={cx("td", `p-[10px_5px] flex items-center flex-1 min-w-[90px]`)}>
            Bộ 4 công tắc B, 1 chiều, 16A 250VAC
         </div>
         <div className={cx("td", "hide-1400", `p-[10px_5px] flex items-center justify-center flex-[calc(1/2)]`)}>Panasonic</div>
         <div className={cx("td", "hide-767", `p-[10px_5px] flex items-center justify-center w-[80px] shrink-0`)}>
            {isEdit && id === itemId ? (
               <Input
                  value={quantityValue}
                  type="number"
                  wrapperCl={`w-full`}
                  inputCl={`w-full bg-white p-2 text-center outline outline-[1px] outline-black focus:outline-[2px]`}
                  onChange={(e) => handleChangeQuantity(e)}
               />
            ) : (
               quantity
            )}
         </div>
         <div className={cx("td", "hide-767", `p-[10px_5px] flex items-center justify-center w-[80px]`)}>Cái</div>
         <div className={cx("td", "hide-767", `p-[10px_5px] flex items-center justify-center w-[120px]`)}>290.500</div>
         <div className={cx("td", "hide-767", `p-[10px_5px] flex items-center justify-center w-[120px]`)}>290.500</div>
         <div className={cx("td", `p-[10px_5px] w-[200px]`)}>
            <div className={cx("show-767", `hidden`)}>
               <div className={`flex items-center justify-between`}>
                  <div className={`flex flex-1 shrink-0`}>
                     <span className={`text-twentieth-color mr-1`}>ĐVT:</span>
                     <span>Cái</span>
                  </div>
                  <div className={`flex items-center flex-1 shrink-0`}>
                     <span className={`text-fifty-fourth-color block ml-auto mr-2`}>x</span>
                     {isEdit && id === itemId ? (
                        <Input
                           value={quantityValue}
                           type="number"
                           wrapperCl={`flex-1`}
                           inputCl={`w-full bg-white p-2 text-center outline outline-[1px] outline-black focus:outline-[2px]`}
                           onChange={(e) => handleChangeQuantity(e)}
                        />
                     ) : (
                        <span className={`block`}>{quantity}</span>
                     )}
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
            {isEdit && id === itemId ? (
               <div className={`flex flex-wrap mt-2 justify-center gap-[4.8px]`}>
                  <Button
                     quaternary
                     leftIcon={<i className="bi bi-arrow-counterclockwise text-denary-color"></i>}
                     onClick={handleSave}
                  >
                     Cập nhật
                  </Button>
                  <Button quaternary leftIcon={<i className="bi bi-x-circle text-denary-color"></i>} onClick={handleCancelEdit}>
                     Hủy
                  </Button>
               </div>
            ) : (
               <div className={`flex flex-wrap mt-2 justify-center gap-[4.8px]`}>
                  <Button
                     tertiary
                     leftIcon={<i className="bi bi-pencil-square text-denary-color"></i>}
                     onClick={() => handleEdit(id)}
                  >
                     Sửa
                  </Button>
                  <Button tertiary leftIcon={<i className="bi bi-trash text-denary-color"></i>}>
                     Xóa
                  </Button>
               </div>
            )}
         </div>
      </div>
   );
}

CartTableItem.propTypes = {
   data: PropTypes.object,
   id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   onClick: PropTypes.func,
   itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   indx: PropTypes.number,
};

export default CartTableItem;
