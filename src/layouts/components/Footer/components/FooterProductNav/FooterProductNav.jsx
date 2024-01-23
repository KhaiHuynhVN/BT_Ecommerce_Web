import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./FooterProductNav.module.scss";

const cx = classNames.bind(styles);

function FooterProductNav() {
   return (
      <nav className={cx("wrapper")}>
         <ul className="flex justify-center flex-wrap gap-2 mt-1">
            <li className={cx("nav-item", "border border-solid border-twenty-sixth-color rounded-[3px]")}>
               <Link className="block text-[16px] p-[6.4px_11.2px]" to={"/"}>
                  <i className="bi bi-lightning mr-1 text-tertiary-color"></i>
                  Công Tắc Ổ Cắm và Phụ Kiện
               </Link>
            </li>
            <li className={cx("nav-item", "border border-solid border-twenty-sixth-color rounded-[3px]")}>
               <Link className="block text-[16px] p-[6.4px_11.2px]" to={"/"}>
                  <i className="bi bi-lightning mr-1 text-tertiary-color"></i>
                  Phụ Kiện Tủ Điện, Vỏ Tủ Điện
               </Link>
            </li>
            <li className={cx("nav-item", "border border-solid border-twenty-sixth-color rounded-[3px]")}>
               <Link className="block text-[16px] p-[6.4px_11.2px]" to={"/"}>
                  <i className="bi bi-lightning mr-1 text-tertiary-color"></i>
                  Công Tắc Ổ Cắm và Phụ Kiện
               </Link>
            </li>
            <li className={cx("nav-item", "border border-solid border-twenty-sixth-color rounded-[3px]")}>
               <Link className="block text-[16px] p-[6.4px_11.2px]" to={"/"}>
                  <i className="bi bi-lightning mr-1 text-tertiary-color"></i>
                  Phụ Kiện Tủ Điện, Vỏ Tủ Điện
               </Link>
            </li>
            <li className={cx("nav-item", "border border-solid border-twenty-sixth-color rounded-[3px]")}>
               <Link className="block text-[16px] p-[6.4px_11.2px]" to={"/"}>
                  <i className="bi bi-lightning mr-1 text-tertiary-color"></i>
                  Công Tắc Ổ Cắm và Phụ Kiện
               </Link>
            </li>
            <li className={cx("nav-item", "border border-solid border-twenty-sixth-color rounded-[3px]")}>
               <Link className="block text-[16px] p-[6.4px_11.2px]" to={"/"}>
                  <i className="bi bi-lightning mr-1 text-tertiary-color"></i>
                  Phụ Kiện Tủ Điện, Vỏ Tủ Điện
               </Link>
            </li>
            <li className={cx("nav-item", "border border-solid border-twenty-sixth-color rounded-[3px]")}>
               <Link className="block text-[16px] p-[6.4px_11.2px]" to={"/"}>
                  <i className="bi bi-lightning mr-1 text-tertiary-color"></i>
                  Công Tắc Ổ Cắm và Phụ Kiện
               </Link>
            </li>
            <li className={cx("nav-item", "border border-solid border-twenty-sixth-color rounded-[3px]")}>
               <Link className="block text-[16px] p-[6.4px_11.2px]" to={"/"}>
                  <i className="bi bi-lightning mr-1 text-tertiary-color"></i>
                  Phụ Kiện Tủ Điện, Vỏ Tủ Điện
               </Link>
            </li>
            <li className={cx("nav-item", "border border-solid border-twenty-sixth-color rounded-[3px]")}>
               <Link className="block text-[16px] p-[6.4px_11.2px]" to={"/"}>
                  <i className="bi bi-lightning mr-1 text-tertiary-color"></i>
                  Công Tắc Ổ Cắm và Phụ Kiện
               </Link>
            </li>
            <li className={cx("nav-item", "border border-solid border-twenty-sixth-color rounded-[3px]")}>
               <Link className="block text-[16px] p-[6.4px_11.2px]" to={"/"}>
                  <i className="bi bi-lightning mr-1 text-tertiary-color"></i>
                  Phụ Kiện Tủ Điện, Vỏ Tủ Điện
               </Link>
            </li>
            <li className={cx("nav-item", "border border-solid border-twenty-sixth-color rounded-[3px]")}>
               <Link className="block text-[16px] p-[6.4px_11.2px]" to={"/"}>
                  <i className="bi bi-lightning mr-1 text-tertiary-color"></i>
                  Công Tắc Ổ Cắm và Phụ Kiện
               </Link>
            </li>
            <li className={cx("nav-item", "border border-solid border-twenty-sixth-color rounded-[3px]")}>
               <Link className="block text-[16px] p-[6.4px_11.2px]" to={"/"}>
                  <i className="bi bi-lightning mr-1 text-tertiary-color"></i>
                  Phụ Kiện Tủ Điện, Vỏ Tủ Điện
               </Link>
            </li>
         </ul>
      </nav>
   );
}

export default FooterProductNav;
