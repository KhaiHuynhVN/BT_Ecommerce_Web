import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import BrandCarousel from "../../components/BrandCarousel";
import Breadcrumbs from "../../components/Breadcrumbs";
import PostWidget from "../../components/PostWidget";
import SectionWrapper from "../../components/SectionWrapper";
import UiContainer from "./components/UiContainer";
import OrderConfirm from "./components/OrderConfirm";
import routesConfig from "../../routesConfig";
import { authSliceSelector } from "../../store/authSlice";

import styles from "./Checkout.module.scss";

const cx = classNames.bind(styles);

function Checkout() {
   const userData = useSelector(authSliceSelector.userData);
   const isHasUserData = Object.keys(userData).length > 0;

   return (
      <div className={cx("wrapper", `mt-[1rem]`)}>
         <Breadcrumbs breadcrumbs={routesConfig.checkout.breadcrumbs} routesConfig={routesConfig} />

         <div className={`mt-[1rem]`}>
            <SectionWrapper
               leftIcon={
                  isHasUserData ? (
                     <i className="bi bi-journal-check text-denary-color"></i>
                  ) : (
                     <i className="bi bi-person-lines-fill text-denary-color"></i>
                  )
               }
               title={isHasUserData ? `Xác nhận đơn hàng` : `Vui lòng điền thông tin để tiếp tục mua hàng`}
               button={isHasUserData}
               btnTitle={isHasUserData ? `Trở về` : ""}
               btnLeftIcon={isHasUserData && <i className="bi bi-caret-left text-octonary-color"></i>}
               btnTo={routesConfig.cart.path}
            >
               {isHasUserData ? <OrderConfirm /> : <UiContainer />}
            </SectionWrapper>
         </div>

         <div className="mt-[1rem]">
            <BrandCarousel />
         </div>

         <div className={`mt-[1rem]`}>
            <PostWidget />
         </div>
      </div>
   );
}

export default Checkout;
