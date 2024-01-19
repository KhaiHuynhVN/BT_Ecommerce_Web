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

   const classes = cx("wrapper", "tr", `flex`, {
      "bg-forty-ninth-color": isEdit && id === itemId,
   });

   const handleEdit = (id) => {
      setIsEdit(true);
      onClick(id);
   };

   const handleSave = () => {
      setIsEdit(false);
   };

   const handleEndEdit = () => {
      setIsEdit(false);
      setQuantityValue(data.quantity);
   };

   const handleChangeQuantity = (e) => {
      const value = e.target.value;
      const replaceValue = value.replace(/^0+/, "");
      const newValue = Math.floor(+replaceValue);
      +value < 1 ? setQuantityValue(1) : setQuantityValue(String(newValue));
   };

   return (
      <div className={classes}>
         <div className={cx("td", `text-forty-sixth-color p-[10px_5px] flex items-center justify-center w-[50px]`)}>{indx}</div>
         <div className={cx("td", `text-forty-sixth-color p-[10px_5px] flex items-center justify-center w-[60px]`)}>
            <Image src="https://thegioidien.com/hmhB/b%E1%BB%99%204%20c%C3%B4ng%20t%E1%BA%AFc725253557.jpg" />
         </div>
         <div className={cx("td", `text-forty-sixth-color p-[10px_5px] flex items-center flex-[calc(1/2)]`)}>WMT507MYH-VN</div>
         <div className={cx("td", `text-forty-sixth-color p-[10px_5px] flex items-center flex-1 min-w-[90px]`)}>
            Bộ 4 công tắc B, 1 chiều, 16A 250VAC
         </div>
         <div className={cx("td", `text-forty-sixth-color p-[10px_5px] flex items-center justify-center flex-[calc(1/2)]`)}>
            Panasonic
         </div>
         <div className={cx("td", `text-forty-sixth-color p-[10px_5px] flex items-center justify-center w-[80px]`)}>
            {isEdit && id === itemId ? (
               <Input
                  value={quantityValue}
                  type="number"
                  wrapperCl={`w-full`}
                  inputCl={`w-full bg-white p-2 text-center outline outline-[1px] outline-black focus:outline-[2px]`}
                  onChange={(e) => handleChangeQuantity(e)}
               />
            ) : (
               quantityValue
            )}
         </div>
         <div className={cx("td", `text-forty-sixth-color p-[10px_5px] flex items-center justify-center w-[80px]`)}>Cái</div>
         <div className={cx("td", `text-forty-sixth-color p-[10px_5px] flex items-center justify-center w-[120px]`)}>290.500</div>
         <div className={cx("td", `text-forty-sixth-color p-[10px_5px] flex items-center justify-center w-[120px]`)}>290.500</div>
         <div className={cx("td", `text-forty-sixth-color p-[10px_5px] flex items-center justify-center w-[200px]`)}>
            {isEdit && id === itemId ? (
               <>
                  <Button quaternary leftIcon={<i className="bi bi-pencil-square text-denary-color"></i>} onClick={handleSave}>
                     Cập nhật
                  </Button>
                  <Button
                     className={`ml-[4.8px]`}
                     quaternary
                     leftIcon={<i className="bi bi-x-circle text-denary-color"></i>}
                     onClick={handleEndEdit}
                  >
                     Hủy
                  </Button>
               </>
            ) : (
               <>
                  <Button
                     tertiary
                     leftIcon={<i className="bi bi-pencil-square text-denary-color"></i>}
                     onClick={() => handleEdit(id)}
                  >
                     Sửa
                  </Button>
                  <Button className={`ml-[4.8px]`} tertiary leftIcon={<i className="bi bi-trash text-denary-color"></i>}>
                     Xóa
                  </Button>
               </>
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
