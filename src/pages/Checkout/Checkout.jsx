import classNames from "classnames/bind";
import { useState } from "react";

import BreakCump from "../../components/BreakCump";
import routesConfig from "../../routesConfig";
import SectionWrapper from "../../components/SectionWrapper";
import RadioSectionWrapper from "../../components/RadioSectionWrapper";
import SignUpForm from "../../components/SignUpForm";
import BuyNowForm from "../../components/BuyNowForm";
import SignInForm from "../../components/SignInForm";
import BrandCarousel from "../../components/BrandCarousel";
import PostWrapper from "../../components/PostWrapper";
import PostItem from "../../components/PostItem";
import CheckoutTable from "./components/CheckoutTable";

import styles from "./Checkout.module.scss";

const cx = classNames.bind(styles);

function Checkout() {
   const [radio, setRadio] = useState("sign-in-form");

   const handleChangeRadio = (type) => {
      setRadio(type);
   };

   return (
      <div className={cx("wrapper", `mt-[1rem]`)}>
         <BreakCump breakCumps={routesConfig.checkout.breakCumps} routesConfig={routesConfig} />

         <div className={`mt-[1rem]`}>
            <SectionWrapper
               leftIcon={<i className="bi bi-person-lines-fill text-denary-color"></i>}
               title="Vui lòng điền thông tin để tiếp tục mua hàng"
            >
               <div className={`bg-white p-4 flex gap-[1rem]`}>
                  <div className={`flex-1`}>
                     <div className={`flex flex-col gap-[1rem]`}>
                        <RadioSectionWrapper
                           title="Đã là thành viên - Đăng nhập"
                           name="form"
                           isDefaultChecked
                           checked={radio === "sign-in-form"}
                           onChange={() => handleChangeRadio("sign-in-form")}
                        >
                           <div className={`bg-white p-4`}>
                              <SignInForm isReset={radio === "sign-in-form"} />
                           </div>
                        </RadioSectionWrapper>
                        <RadioSectionWrapper
                           title="Mua hàng ngay - Không cần đăng ký"
                           name="form"
                           checked={radio === "buy-now-form"}
                           onChange={() => handleChangeRadio("buy-now-form")}
                        >
                           <div className={`bg-white p-4`}>
                              <BuyNowForm isReset={radio === "buy-now-form"} />
                           </div>
                        </RadioSectionWrapper>
                        <RadioSectionWrapper
                           title="Chưa là thành viên - Đăng ký"
                           name="form"
                           checked={radio === "sign-up-form"}
                           onChange={() => handleChangeRadio("sign-up-form")}
                        >
                           <div className={`bg-white p-4`}>
                              <SignUpForm isReset={radio === "sign-up-form"} />
                           </div>
                        </RadioSectionWrapper>
                     </div>
                  </div>
                  <div className={`flex-1`}>
                     <span
                        className={`text-[17.6px] text-forty-fifth-color p-[11.2px] bg-fifty-second-color block
                        text-center`}
                     >
                        ĐƠN HÀNG
                     </span>
                     <CheckoutTable />
                  </div>
               </div>
            </SectionWrapper>
         </div>

         <div className="mt-[1rem]">
            <BrandCarousel />
         </div>

         <div className="mt-[1rem] grid grid-cols-12 gap-[1rem]">
            <div className="col-span-4">
               <PostWrapper
                  className="border-b-[3px] border-twenty-second-color border-solid"
                  gridCl="bg-twenty-third-color grid grid-cols-12 p-4 gap-[1.5rem_1rem]"
                  title="Hướng dẫn - Câu hỏi thường gặp"
                  leftIcon={<i className="bi bi-patch-question-fill text-secondary-color"></i>}
               >
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/images388638267032664804.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/images388638267032664804.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/images388638267032664804.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/images388638267032664804.jpg" />
                  </div>
               </PostWrapper>
            </div>
            <div className="col-span-4">
               <PostWrapper
                  className="border-b-[3px] border-twenty-second-color border-solid"
                  gridCl="bg-twenty-third-color grid grid-cols-12 p-4 gap-[1.5rem_1rem]"
                  title="Tài liệu kỹ thuật"
                  leftIcon={<i className="bi bi-file-text-fill text-secondary-color"></i>}
               >
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/TLUG534424638648374342.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/TLUG534424638648374342.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/TLUG534424638648374342.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/TLUG534424638648374342.jpg" />
                  </div>
               </PostWrapper>
            </div>
            <div className="col-span-4">
               <PostWrapper
                  className="border-b-[3px] border-twenty-second-color border-solid"
                  gridCl="bg-twenty-third-color grid grid-cols-12 p-4 gap-[1.5rem_1rem]"
                  title="Bảng giá sản phẩm"
                  leftIcon={<i className="bi bi-currency-dollar text-secondary-color"></i>}
               >
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/Mennekes181728460066052280268475215.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/Mennekes181728460066052280268475215.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/Mennekes181728460066052280268475215.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/Mennekes181728460066052280268475215.jpg" />
                  </div>
               </PostWrapper>
            </div>
         </div>
      </div>
   );
}

export default Checkout;
