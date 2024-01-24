import classNames from "classnames/bind";

import Button from "../Button";

import styles from "./OrderNav.module.scss";

const cx = classNames.bind(styles);

function OrderNav() {
   return (
      <nav className={cx("wrapper", `grid grid-cols-12 gap-[1px]`)}>
         <li className={cx("nav-item", `col-span-2`)}>
            <Button
               className={cx("nav-item-btn", `w-full`)}
               noRounded
               senary
               leftIcon={<i className="bi bi-filter-square text-denary-color"></i>}
            >
               Dự toán đơn hàng (4)
            </Button>
         </li>
         <li className={cx("nav-item", `col-span-2`)}>
            <Button
               className={cx("nav-item-btn", `w-full`)}
               noRounded
               senary
               leftIcon={<i className="bi bi-journal-album text-denary-color"></i>}
            >
               Yêu cầu giá dự án (0)
            </Button>
         </li>
         <li className={cx("nav-item", `col-span-2`)}>
            <Button
               className={cx("nav-item-btn", `w-full`)}
               noRounded
               senary
               leftIcon={<i className="bi bi-coin text-denary-color"></i>}
            >
               Bảng báo giá (0)
            </Button>
         </li>
         <li className={cx("nav-item", `col-span-2`)}>
            <Button
               className={cx("nav-item-btn", `w-full`)}
               noRounded
               senary
               leftIcon={<i className="bi bi-journal-plus text-denary-color"></i>}
            >
               Đơn hàng đã đặt (0)
            </Button>
         </li>
         <li className={cx("nav-item", `col-span-2`)}>
            <Button
               className={cx("nav-item-btn", `w-full`)}
               noRounded
               senary
               leftIcon={<i className="bi bi-journal-check text-denary-color"></i>}
            >
               Đơn hàng đã nhận (0)
            </Button>
         </li>
         <li className={cx("nav-item", `col-span-2`)}>
            <Button
               className={cx("nav-item-btn", `w-full`)}
               noRounded
               senary
               leftIcon={<i className="bi bi-journal-minus text-denary-color"></i>}
            >
               Đơn hàng đã hủy (0)
            </Button>
         </li>
      </nav>
   );
}

export default OrderNav;
