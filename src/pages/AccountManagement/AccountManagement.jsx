/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import BrandCarousel from "../../components/BrandCarousel";
import Breadcrumbs from "../../components/Breadcrumbs";
import OrderNav from "../../components/OrderNav";
import PostWidget from "../../components/PostWidget";
import SectionWrapper from "../../components/SectionWrapper";
import routesConfig from "../../routesConfig";
import { checkToken } from "../../utils";
import UiContainer from "./components/UiContainer";
import { authSliceSelector } from "../../store/authSlice";

import styles from "./AccountManagement.module.scss";

const cx = classNames.bind(styles);

function AccountManagement() {
   const userData = useSelector(authSliceSelector.userData);
   const navigate = useNavigate();

   useEffect(() => {
      if (!localStorage.getItem("userData") || !localStorage.getItem("accessToken") || !localStorage.getItem("refreshToken")) {
         navigate(routesConfig.signIn.path);
      } else if (localStorage.getItem("refreshToken") && !checkToken(localStorage.getItem("refreshToken"))) {
         navigate(routesConfig.signIn.path);
      }
   }, [userData]);

   return (
      <div className={cx(`wrapper`, `mt-[1rem]`)}>
         <Breadcrumbs breadcrumbs={routesConfig.account.breadcrumbs} routesConfig={routesConfig} />

         <div className={`mt-[1rem]`}>
            <OrderNav />

            <div className={`mt-[1px]`}>
               <SectionWrapper title={`Thông tin`} leftIcon={<i className="bi bi-person-fill text-denary-color"></i>}>
                  <UiContainer data={userData} />
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
