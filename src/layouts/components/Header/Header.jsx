/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { images } from "../../../assets";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import Input from "../../../components/Input";
import routesConfig from "../../../routesConfig";
import { userServices } from "../../../services";
import authSlice, { authSliceSelector } from "../../../store/authSlice";
import { checkToken } from "../../../utils";
import FacebookIframe from "./components/FacebookIframe";
import NavMain from "./components/NavMain";
import ProductNav from "./components/ProductNav";
import productNavSlice, { productNavSelector } from "./components/ProductNav/productNavSlice";
import SignInForm from "./components/SignInForm";
import UserMenu from "./components/UserMenu";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
   const dispatch = useDispatch();

   const showProductNavBtnRef = useRef(null);

   const isShowProductNav = useSelector(productNavSelector.isShowProductNav);
   const userData = useSelector(authSliceSelector.userData);

   useEffect(() => {
      if (!localStorage.getItem("userData")) {
         dispatch(authSlice.actions.setUserData({}));
      }
   });

   useEffect(() => {
      localStorage.getItem("refreshToken") &&
         !checkToken(localStorage.getItem("refreshToken")) &&
         dispatch(authSlice.actions.clearUserData());
   }, [checkToken(localStorage.getItem("refreshToken"))]);

   const handleShowProductNav = () => {
      dispatch(productNavSlice.actions.setShowProductNav(!isShowProductNav));
   };

   const handleSignOut = async () => {
      try {
         await userServices.signOutService();
         dispatch(authSlice.actions.clearUserData());
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <header className={cx("wrapper", "grid gap-[1rem]")}>
         <div>
            <div className={`flex justify-between items-center bg-primary-color`}>
               <div className="flex gap-[2px]">
                  <FacebookIframe />
                  <NavMain />
               </div>
               {Object.keys(userData).length > 0 ? (
                  <Button
                     className={cx("nav-item", "text-white py-[0.5rem] px-[0.7rem] bg-tertiary-color cursor-pointer")}
                     leftIcon={<i className="bi bi-box-arrow-in-right text-secondary-color"></i>}
                     onClick={handleSignOut}
                  >
                     Thoát
                  </Button>
               ) : (
                  <>
                     <Button
                        className={cx(
                           "nav-item",
                           "sign-up-btn",
                           "text-white py-[0.5rem] px-[0.7rem] bg-tertiary-color cursor-pointer",
                        )}
                        to={routesConfig.signUp.path}
                        leftIcon={<i className="bi bi-file-earmark-person text-secondary-color"></i>}
                     >
                        Đăng ký
                     </Button>
                     <Button
                        className={cx(
                           "nav-item",
                           "account-btn",
                           "text-white py-[0.5rem] px-[0.7rem] bg-tertiary-color cursor-pointer",
                        )}
                        to={routesConfig.signIn.path}
                        leftIcon={<i className="bi bi-file-earmark-person text-secondary-color"></i>}
                     >
                        Tài khoản
                     </Button>
                  </>
               )}
            </div>
            {Object.keys(userData).length > 0 && (
               <Button
                  className={cx(
                     "nav-item",
                     "user-detail-btn",
                     "text-white py-[0.5rem] px-[0.7rem] bg-tertiary-color cursor-pointer",
                  )}
                  to={routesConfig.account.path}
                  leftIcon={<i className="bi bi-file-earmark-person text-secondary-color"></i>}
               >
                  Huỳnh Tiến Khải
               </Button>
            )}
         </div>

         <div className={cx("header-center", "grid grid-cols-12 gap-[1rem]")}>
            <Link className={cx("header-center-logo", "col-span-3 p-[0.5rem] flex")} to={routesConfig.home.path}>
               <Image className="m-[auto_0] cursor-pointer" src={images.logo} alt="logo" />
            </Link>
            <div className={cx("header-center-info", "col-span-6 flex justify-around")}>
               <div className={cx("header-center-info__item", "flex items-center p-[0.5rem]")}>
                  <i className="bi bi-telephone-fill text-quaternary-color text-[2rem] font-[400] mr-2 flex-shrink-0"></i>
                  <div className="flex flex-col">
                     <span className="text-quinary-color text-[1.2rem]">028 3720 2968 - 0967 266 277</span>
                     <span className="text-senary-color">Thứ 2-6: 8-17H; Thứ 7: 8-12H</span>
                  </div>
               </div>
               <div className={cx("header-center-info__item", "flex items-center p-[0.5rem]")}>
                  <i className="bi bi-mailbox text-quaternary-color text-[2rem] font-[400] mr-2 flex-shrink-0"></i>
                  <div className="flex flex-col">
                     <span className="text-quinary-color text-[1.2rem]">sales@thegioidien.com</span>
                     <span className="text-senary-color">Trả lời 24h trong giờ hành chính</span>
                  </div>
               </div>
            </div>
            <div className={cx("header-center-right", "col-span-3")}>
               {Object.keys(userData).length > 0 ? <UserMenu data={userData} /> : <SignInForm />}
            </div>
         </div>

         <div className={cx("header-bottom", "grid grid-cols-12 gap-[1rem] relative")}>
            <div className={cx("header-bottom-left", "col-span-3")}>
               <div
                  ref={showProductNavBtnRef}
                  className="flex justify-between items-center bg-tertiary-color hover:bg-fourteenth-color transition-all duration-[0.2s] p-[0.7rem] text-white text-[1.1rem] cursor-pointer"
                  onClick={handleShowProductNav}
               >
                  <i className="bi bi-list"></i>
                  DANH MỤC SẢN PHẨM
                  {isShowProductNav ? <i className="bi bi-chevron-up"></i> : <i className="bi bi-plus-lg"></i>}
               </div>

               {isShowProductNav && <ProductNav showProductNavBtnRef={showProductNavBtnRef} />}
            </div>
            <div className={cx("header-bottom-search", "col-span-6")}>
               <div className="rounded-[3px] p-1 bg-tertiary-color h-full">
                  <div className="bg-thirteenth-color flex h-full">
                     <Input wrapperCl="flex-1 p-[0.3rem] text-[1.2rem]" type="text" placeholder="Tìm sản phẩm..." />
                     <Button className="p-[0_10px] items-center">
                        <i className="bi bi-search flex-shrink-0 text-quaternary-color font-[600] text-[1rem]"></i>
                     </Button>
                  </div>
               </div>
            </div>
            <div className={cx("header-bottom-right", "col-span-3")}>
               <Button
                  className="bg-tertiary-color text-white text-[1.1rem] h-full w-full py-[0.5rem] px-[0.7rem] flex justify-center items-center"
                  leftIcon={<i className="bi bi-cart text-[22px] text-denary-color"></i>}
                  fallbackLeftIcon={<i className="bi bi-cart-plus text-[22px] text-denary-color"></i>}
                  to={routesConfig.cart.path}
               >
                  0 Sản phẩm
               </Button>
            </div>
         </div>
      </header>
   );
}

export default Header;
