import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

import Button from "../../../components/Button";
import Image from "../../../components/Image";
import Input from "../../../components/Input";
import ProductNav from "./components/ProductNav";
import NavMain from "./components/NavMain";
import FacebookIframe from "./components/FacebookIframe";
import SignInForm from "./components/SignInForm";
import UserMenu from "./components/UserMenu";

import { images } from "../../../assets";
import routesConfig from "../../../routesConfig";
import productNavSlice, { productNavSelector } from "./components/ProductNav/productNavSlice";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
   const isSignIn = false;
   const dispatch = useDispatch();

   const showProductNavBtnRef = useRef(null);

   const isShowProductNav = useSelector(productNavSelector.isShowProductNav);

   const handleShowProductNav = () => {
      dispatch(productNavSlice.actions.setShowProductNav(!isShowProductNav));
   };

   return (
      <header className="grid gap-[1rem]">
         <div className="flex justify-between items-center bg-primary-color">
            <div className="flex gap-[2px]">
               <FacebookIframe />
               <NavMain />
            </div>
            <Button
               className={cx("nav-item", "text-white py-[0.5rem] px-[0.7rem] bg-tertiary-color cursor-pointer")}
               to={routesConfig.signUp.path}
            >
               <i className="bi bi-file-earmark-person text-secondary-color mr-2"></i>
               Đăng ký
            </Button>
         </div>

         <div className="grid grid-cols-12 gap-[1rem]">
            <Link className="col-span-3 p-[0.5rem] flex" to={routesConfig.home.path}>
               <Image className="m-[auto_0] cursor-pointer" src={images.logo} alt="logo" />
            </Link>
            <div className="col-span-6 flex justify-around">
               <div className="flex items-center p-[0.5rem]">
                  <i className="bi bi-telephone-fill text-quaternary-color text-[2rem] font-[400] mr-2 flex-shrink-0"></i>
                  <div className="flex flex-col">
                     <span className="text-quinary-color text-[1.2rem]">028 3720 2968 - 0967 266 277</span>
                     <span className="text-senary-color">Thứ 2-6: 8-17H; Thứ 7: 8-12H</span>
                  </div>
               </div>
               <div className="flex items-center p-[0.5rem]">
                  <i className="bi bi-mailbox text-quaternary-color text-[2rem] font-[400] mr-2 flex-shrink-0"></i>
                  <div className="flex flex-col">
                     <span className="text-quinary-color text-[1.2rem]">sales@thegioidien.com</span>
                     <span className="text-senary-color">Trả lời 24h trong giờ hành chính</span>
                  </div>
               </div>
            </div>
            <div className="col-span-3">{isSignIn ? <UserMenu /> : <SignInForm />}</div>
         </div>

         <div className="grid grid-cols-12 gap-[1rem] relative">
            <div className="col-span-3">
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
            <div className="col-span-6">
               <div className="rounded-[3px] p-1 bg-tertiary-color h-full">
                  <div className="bg-thirteenth-color flex h-full">
                     <Input wrapperCl="flex-1 p-[0.3rem] text-[1.2rem]" type="text" placeholder="Tìm sản phẩm..." />
                     <Button className="p-[0_10px] items-center">
                        <i className="bi bi-search flex-shrink-0 text-quaternary-color font-[600] text-[1rem]"></i>
                     </Button>
                  </div>
               </div>
            </div>
            <div className="col-span-3">
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
