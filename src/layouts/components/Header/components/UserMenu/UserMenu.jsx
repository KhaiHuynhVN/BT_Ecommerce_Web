import classNames from "classnames/bind";

import Button from "../../../../../components/Button";
import routesConfig from "../../../../../routesConfig";

import styles from "./UserMenu.module.scss";

const cx = classNames.bind(styles);

function UserMenu() {
   return (
      <div className={cx(`wrapper`, `p-2 bg-nonary-color text-[17.6px]`)}>
         <span className={`text-septenary-color`}>Xin chào Huỳnh Tiến Khải</span>
         <Button
            className={`mt-2 w-full justify-start`}
            quinary
            leftIcon={<i className="bi bi-file-earmark-person text-septenary-color"></i>}
            to={routesConfig.account.path}
         >
            Quản lý tài khoản
         </Button>
         <Button
            className={`mt-2 w-full justify-start`}
            quinary
            leftIcon={<i className="bi bi-currency-exchange text-septenary-color"></i>}
            to={"/"}
         >
            Tạo dự toán đơn hàng mới
         </Button>
      </div>
   );
}

export default UserMenu;
