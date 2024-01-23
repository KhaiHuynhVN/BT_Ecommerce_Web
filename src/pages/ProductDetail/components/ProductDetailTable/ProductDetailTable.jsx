import classNames from "classnames/bind";

import styles from "./ProductDetailTable.module.scss";

const cx = classNames.bind(styles);

function ProductDetailTable() {
   return (
      <table className={cx("wrapper", "border-collapse border border-solid border-thirty-eighth-color w-full")}>
         <thead className="font-bold">
            <tr>
               <th
                  colSpan={2}
                  className={`border border-solid border-thirty-eighth-color 
             text-start pl-[5px] py-[8px]`}
               >
                  <i className="bi bi-patch-plus text-[16px] text-red-700 mr-2"></i>
                  Thông số kỹ thuật
               </th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>Chất liệu</td>
               <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>Kim loại</td>
            </tr>
            <tr>
               <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>Màu sắc</td>
               <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>Nhũ bạc</td>
            </tr>
            <tr>
               <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>Thiết bị tương thích</td>
               <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>Series Concept</td>
            </tr>
            <tr>
               <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>Loại</td>
               <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>Ổ cắm âm sàn</td>
            </tr>
            <tr>
               <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>Thiết bị gắn kèm</td>
               <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>Không</td>
            </tr>
            <tr>
               <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>Đế gắn kèm (chưa bao gồm)</td>
               <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>M224B</td>
            </tr>
            <tr>
               <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>Kích thước (WxHxD)</td>
               <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>120x120x78 mm</td>
            </tr>
            <tr>
               <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>Quy cách đóng gói</td>
               <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>Bao nhựa</td>
            </tr>
         </tbody>
      </table>
   );
}

export default ProductDetailTable;
