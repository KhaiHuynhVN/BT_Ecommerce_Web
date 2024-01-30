/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";

import BrandCarousel from "../../components/BrandCarousel";
import Breadcrumbs from "../../components/Breadcrumbs";
import OrderNav from "../../components/OrderNav";
import PostWidget from "../../components/PostWidget";
import SectionWrapper from "../../components/SectionWrapper";
import routesConfig from "../../routesConfig";
import UiContainer from "./components/UiContainer";

import styles from "./AccountManagement.module.scss";

const cx = classNames.bind(styles);

function AccountManagement() {
   return (
      <div className={cx(`wrapper`, `mt-[1rem]`)}>
         <Breadcrumbs breadcrumbs={routesConfig.account.breadcrumbs} routesConfig={routesConfig} />

         <div className={`mt-[1rem]`}>
            <OrderNav />

            <div className={`mt-[1px]`}>
               <SectionWrapper title={`Thông tin`} leftIcon={<i className="bi bi-person-fill text-denary-color"></i>}>
                  <UiContainer />
               </SectionWrapper>
            </div>
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

export default AccountManagement;
