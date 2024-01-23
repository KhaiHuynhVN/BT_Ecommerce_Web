import classNames from "classnames/bind";

import styles from "./NavMain.module.scss";

const cx = classNames.bind(styles);

function NavMain() {
   return (
      <nav className={cx(`wrapper`)}>
         <ul className="h-full flex items-center gap-[2px] text-[#fff]">
            <li className={cx("nav-item", "bg-tertiary-color py-[0.5rem] px-[0.7rem] cursor-pointer")}>
               <i className="bi bi-file-text-fill text-secondary-color mr-2"></i>
               Tài liệu kỹ thuật
            </li>
            <li className={cx("nav-item", "bg-tertiary-color py-[0.5rem] px-[0.7rem] cursor-pointer")}>
               <i className="bi bi-patch-question-fill text-secondary-color mr-2"></i>
               Hướng dẫn
            </li>
            <li className={cx("nav-item", "bg-tertiary-color py-[0.5rem] px-[0.7rem] cursor-pointer")}>
               <i className="bi bi-currency-dollar text-secondary-color mr-2"></i>
               Bảng giá sản phẩm
            </li>
            <li className={cx("nav-item", "bg-tertiary-color py-[0.5rem] px-[0.7rem] cursor-pointer")}>
               <i className="bi bi-telephone-fill text-secondary-color mr-2"></i>
               Liên hệ
            </li>
         </ul>
      </nav>
   );
}

export default NavMain;
