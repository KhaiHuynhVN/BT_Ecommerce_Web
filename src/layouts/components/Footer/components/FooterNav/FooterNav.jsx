import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./FooterNav.module.scss";

const cx = classNames.bind(styles);

function FooterNav() {
   return (
      <nav>
         <ul className="flex flex-wrap justify-center items-center gap-2">
            <li>
               <Link className={cx("nav-item", "text-[16px] text-white p-[6.4px_11.2px] rounded-[3px] block")} to="/">
                  <i className="bi bi-house text-twenty-fourth-color mr-[4.8px]"></i>
                  Trang chủ
               </Link>
            </li>
            <li>
               <Link className={cx("nav-item", "text-[16px] text-white p-[6.4px_11.2px] rounded-[3px] block")} to="/">
                  <i className="bi bi-file-text-fill text-secondary-color mr-[4.8px]"></i>
                  Tài liệu kỹ thuật
               </Link>
            </li>
            <li>
               <Link className={cx("nav-item", "text-[16px] text-white p-[6.4px_11.2px] rounded-[3px] block")} to="/">
                  <i className="bi bi-patch-question-fill text-secondary-color mr-[4.8px]"></i>
                  Hướng dẫn
               </Link>
            </li>
            <li>
               <Link className={cx("nav-item", "text-[16px] text-white p-[6.4px_11.2px] rounded-[3px] block")} to="/">
                  <i className="bi bi-currency-dollar text-secondary-color mr-[4.8px]"></i>
                  Bảng giá sản phẩm
               </Link>
            </li>
            <li>
               <Link className={cx("nav-item", "text-[16px] text-white p-[6.4px_11.2px] rounded-[3px] block")} to="/">
                  <i className="bi bi-telephone-fill text-secondary-color mr-[4.8px]"></i>
                  Liên hệ
               </Link>
            </li>
            <li>
               <Link className={cx("nav-item", "text-[16px] text-white p-[6.4px_11.2px] rounded-[3px] block")} to="/">
                  <i className="bi bi-file-text-fill text-secondary-color mr-[4.8px]"></i>
                  Quy định - điều khoản sử dụng websie
               </Link>
            </li>
         </ul>
      </nav>
   );
}

export default FooterNav;
