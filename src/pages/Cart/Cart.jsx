import classNames from "classnames/bind";
import { useState } from "react";
import { useSelector } from "react-redux";

import Breadcrumbs from "../../components/Breadcrumbs";
import BrandCarousel from "../../components/BrandCarousel";
import SectionWrapper from "../../components/SectionWrapper";
import Select from "../../components/Select";
import CartTable from "./components/CartTable/CartTable";
import Button from "../../components/Button";
import PostWidget from "../../components/PostWidget";
import Input from "../../components/Input";
import routesConfig from "../../routesConfig";
import { authSliceSelector } from "../../store/authSlice";

import styles from "./Cart.module.scss";

const cx = classNames.bind(styles);

function Cart() {
   const [projectValue, setProjectValue] = useState("DH-349557");
   const userData = useSelector(authSliceSelector.userData);

   const handleChangeValue = (e) => {
      setProjectValue(e.target.value.trimStart());
   };

   return (
      <div className={cx("wrapper", `mt-[1rem]`)}>
         <Breadcrumbs breadcrumbs={routesConfig.cart.breadcrumbs} routesConfig={routesConfig} />

         <div className={`mt-[1rem]`}>
            <SectionWrapper
               leftIcon={<i className="bi bi-currency-dollar text-denary-color"></i>}
               title="Chi tiết đơn hàng, dự án"
               button
               btnTitle={`Xóa đơn hàng`}
               btnLeftIcon={<i className="bi bi-trash text-octonary-color"></i>}
               isSignIned={Object.keys(userData).length > 0}
            >
               <div className={`bg-white`}>
                  {Object.keys(userData).length > 0 && (
                     <div className={cx("project-wrapper", `p-4 bg-nonary-color flex items-center justify-between`)}>
                        <div className={cx("project-wrapper-right", `flex items-center`)}>
                           <span className={`mr-2 text-fifty-sixth-color`}>Tên đơn hàng, dự án</span>
                           <Input
                              value={projectValue}
                              wrapperCl={cx("input-wrapper-main", `mr-4`)}
                              inputWrapperCl={`w-full`}
                              inputCl={`bg-white border border-solid border-black p-2 w-[200px] w-full`}
                              onChange={handleChangeValue}
                           />
                           <Button
                              className={`p-2 max-w-fit`}
                              primary
                              leftIcon={<i className="bi bi-arrow-counterclockwise text-denary-color"></i>}
                           >
                              Cập nhật
                           </Button>
                        </div>
                        <div>
                           <span className={`text-octonary-color mr-1`}>Mã số:</span>
                           <span className={`text-thirty-first-color text-[19.2px]`}>EW49646</span>
                        </div>
                     </div>
                  )}
                  <div className={`p-4`}>
                     <span className={`block text-[19.2px]`}>Chọn sản phẩm nhanh</span>
                     <Select
                        wrapperCl={`my-4`}
                        selectCl={cx(
                           "select",
                           `border border-solid border-transparent outline outline-1 outline-black focus:border-black 
                        p-2 w-[690px]`,
                        )}
                        placeholder={`-- Chọn danh mục sản phẩm`}
                     />
                     <Select
                        wrapperCl={`my-4`}
                        selectCl={cx(
                           "select",
                           `border border-solid border-transparent outline outline-1 outline-black focus:border-black 
                        p-2 w-[690px]`,
                        )}
                        placeholder={`-- Chọn nhãn hiệu`}
                     />
                  </div>
                  <div className={`mx-2 mb-2`}>
                     <span className={cx("table-title", `block text-[24px] text-thirty-second-color p-4 text-center`)}>
                        BẢNG DỰ TOÁN ĐƠN HÀNG
                     </span>
                     <CartTable />
                  </div>
                  <div className={`p-4 flex flex-wrap gap-2 justify-between`}>
                     <Button
                        primary
                        leftIcon={<i className="bi bi-chevron-left text-denary-color"></i>}
                        to={routesConfig.home.path}
                     >
                        Chọn thêm sản phẩm
                     </Button>
                     <Button
                        primary
                        rightIcon={<i className="bi bi-chevron-right text-denary-color"></i>}
                        to={routesConfig.checkout.path}
                     >
                        Tiếp tục đặt hàng
                     </Button>
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

export default Cart;
