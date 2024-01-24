import classNames from "classnames/bind";
import { useState } from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import SectionWrapper from "../../components/SectionWrapper";
import RadioSectionWrapper from "../../components/RadioSectionWrapper";
import SignUpForm from "./components/SignUpForm";
import BuyNowForm from "./components/BuyNowForm";
import SignInForm from "./components/SignInForm";
import BrandCarousel from "../../components/BrandCarousel";
import CheckoutTable from "./components/CheckoutTable";
import PostWidget from "../../components/PostWidget";
import Button from "../../components/Button";
import routesConfig from "../../routesConfig";

import styles from "./Checkout.module.scss";

const cx = classNames.bind(styles);

function Checkout() {
   const [radio, setRadio] = useState("sign-in-form");

   const handleChangeRadio = (type) => {
      setRadio(type);
   };

   return (
      <div className={cx("wrapper", `mt-[1rem]`)}>
         <Breadcrumbs breadcrumbs={routesConfig.checkout.breadcrumbs} routesConfig={routesConfig} />

         <div className={`mt-[1rem]`}>
            <SectionWrapper
               leftIcon={<i className="bi bi-person-lines-fill text-denary-color"></i>}
               title="Vui lòng điền thông tin để tiếp tục mua hàng"
            >
               <div className={cx("ui-container", `bg-white p-4 flex gap-[1rem]`)}>
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
                     <div>
                        <span
                           className={`text-[17.6px] text-forty-fifth-color p-[11.2px] bg-fifty-second-color block
                           text-center`}
                        >
                           ĐƠN HÀNG
                        </span>
                        <CheckoutTable />
                        <div className={`p-4 flex flex-wrap gap-2 justify-between`}>
                           <Button
                              primary
                              leftIcon={<i className="bi bi-chevron-left text-denary-color"></i>}
                              to={routesConfig.home.path}
                           >
                              Chọn thêm sản phẩm
                           </Button>
                           <Button primary leftIcon={<i className="bi bi-trash text-denary-color"></i>} to={"/"}>
                              Xoá đơn hàng
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
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
